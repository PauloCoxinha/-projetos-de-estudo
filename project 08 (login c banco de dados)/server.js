const express = require('express');
const mysql = require('mysql2');        
const cors = require('cors');
const path = require('path');

const app = express()
const PORT = 127.0.0.1;

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


