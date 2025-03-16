
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
const { error } = require('console');
// opções de conexão comm o mysql//

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());


app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.static('frontend'));





app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kositiskositos',
    database: 'bd_tasks'

});




app.listen(PORT, () => {
    console.log(`servidor iniciado na porta: ${PORT}`);
})






//rotas
//-----------------------------------------------------------------
app.get("/", (_req, res) => {

    //res mmanda ola mundo

    connection.query("SELECT COUNT(*) AS users FROM users", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);

    });


});

//-----------------------------------------------------------------

app.get("/user/:id", (req, res) => {
    const userId = req.params.id;

    connection.query(
        "SELECT id, username, create_at, updated_at FROM users WHERE id = ?",
        [userId],
        (err, results) => {
            if (err) return res.status(500).json({ error: 'Erro no banco de dados' });
            if (results.length === 0) return res.status(404).json({ error: 'Usuário não encontrado' });
            res.json(results[0]);
        }
    );
});


app.get("/user/:id/tasks", (req, res) => { 
    const userId = parseInt (req.params.id);

    if(isNaN(userId)){
        return res.status(400).json({ error: "ID do usuario é obrigatorio!"});
    }

    connection.query(
        "SELECT * FROM tasks WHERE id_user = ?", 
        [userId],
        (err, results) => {
            if (err) {
                console.error("Erro ao buscar tarefas:", err);
                return res.status(500).json({ error: err.message });
            }

            res.json(results);
        }
    );
});


app.post("/user/tasks/updated_status/", (req, res) => {   
    
    connection.query(
        "UPDATE tasks SET task_status = ?, updated_at = NOW() WHERE id = ?", 
        [req.body.status, req.body.id_task],
        (err, results) => {  // Callback para capturar erro e resultado
            if (err) {
                console.error("Erro no MySQL:", err);
                return res.status(500).send("MYSQL error connection");
            }
            res.json({ message: "Status atualizado com sucesso!", results });
        }
    );
});



app.post("/user/tasks/new_task/", (req, res) => {   
    
    connection.query(
        "INSERT INTO tasks VALUES(0, ?, ?, 'new', NOW(), NOW() )", 
        [req.body.id_user, req.body.task_text],
        (err, results) => {  // Callback para capturar erro e resultado
            if (err) {
                console.error("Erro no MySQL:", err);
                return res.status(500).send("MYSQL error connection");
            }
            res.json({ message: "Status atualizado com sucesso!", results });
        }
    );
});



app.get("/user/tasks/get_task/:id_task", (req, res) =>  {
    

    connection.query(   
        "SELECT * FROM tasks WHERE id = ?",
     [req.params.id_task], 
       
        (err, results) => {
            if (err) {
                res.send.status(500).json({error: "MySQL error:" + err.message});
                
            }       

            if (results.length === 0){
                return res.status(404).json({error: "Tarefa n encontrada "})
            }
        
          
        
            res.json(results[0]);  
            
   
        })  
});

///user/tasks/get_task


app.post("/user/tasks/updated_task", (req, res) => {   
    
    connection.query(
        "UPDATE tasks SET task_text = ?, updated_at = NOW() WHERE id = ?", 
        [req.body.task_text, req.body.id_task],
        (err, results) => {  // Callback para capturar erro e resultado
            if (err) {
                console.error("Erro no MySQL:", err);
                return res.status(500).send("MYSQL error connection");
            }
            res.json({ message: "Status atualizado com sucesso!", results });
        }
    );
});




    


    



