const express = require('express');
const mysql = require('mysql2');        
const cors = require('cors');
const path = require('path');

const app = express()
const PORT = 3000;

app.use(cors());

app.use(express.json());

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'kositiskositos',
    database: 'login'

    
})

app.listen(PORT, ()  => {
    console.log(`servidor iniciado na porta ${PORT} `)
})


connection.connect((err) => {
    if(err) {
        console.log('erro ao conecar no banco de dados', err);
        return
    }
    console.log('o banco de dados foi conectado')
})

app.post("/register", (req, res) => {
    const {user, pass, mail } = req.body;

    if(!mail || !user || !pass){
        return res.status(400).send("Todos os campos são obrigatorios");
        
    }
    const sql = "INSERT INTO `user` (username, email, password) VAlUES (?, ?, ?)";
    connection.query(sql, [user, mail, pass], (err, result) => {
        if(err){
            console.log("Erro ao registrar os dados!", err)
            return res.status(500).send('Erro ao registrar usuario!');
        }

        res.send("Usuario registrado com sucesso!")
    })
    
})
