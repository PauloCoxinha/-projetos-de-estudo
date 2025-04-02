const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());


app.use(express.json());



//serve para exportar js, css e html
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
    res.send("Servidor funfando")
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

const PORT = 3000;


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kositiskositos',
    database: 'login',
})

app.listen(PORT, () => {
    console.log('servidor foi escutado');
})

db.connect((err) => {
    if(err){
        console.log("erro no banco de dados", err);
        return
    }
    console.log('banco de dados conectado')
})



app.post("/login", (req, res) => {
   

    const { userlog, passlog } = req.body;

    const checkuserlog = "SELECT * FROM user WHERE username = ? AND password = ?";

    db.query(checkuserlog, [userlog, passlog], (err, result) => {
        if(err){
            console.error("Erro ao buscar dados", error);
            return res.status(500).json({message: 'Erro no servidor'});
        }
        if(result.length > 0){
            res.status(200).json({message: 'login realizado com sucesso'}); } else {
                res.status(401).json({message: 'usuario ou senha estão incorretos!'})
            }
        
    });



});


app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'))
})

app.post("/register", (req, res) => {
    const { user, mail, pass} = req.body;


    const checkuser = "SELECT * FROM user WHERE username = ?";
    db.query(checkuser, [user], (err, result) => {
        if(err){
            console.error("erro ao verificar o usuario", err);
            return res.status(500).json({message: "erro no  servidor"});
        }

        if(result.length > 0 ){
            return res.status(400).json({message: "Usuario ja cadastrado"})
        }
    })

    if(!user || !mail || !pass ){
        return res.status(400).send('todos so campos são obrigatorios')
    } 
        
    const sql = "INSERT INTO `user` (username, email, password) VALUES (?, ?, ?)";
    db.query(sql, [user, mail, pass], (err, results) => {
        if(err){
            console.log('ERRO AO REGISTRAR OS DADOS', err);
            return res.status(500).send('erro ao registrar na base de dados');
        }

        res.send('usuario registrado com sucesso')
    })
})

