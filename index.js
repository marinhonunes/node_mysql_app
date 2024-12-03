const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: '137.131.181.161', 
    user: 'usuario_node', 
    password: 'senha123',
    database: 'atividadefinal',
    port: 3306
});


connection.connect(function(err) {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ' + err.stack);
        return;
    }
    console.log('Conectado ao banco de dados como id ' + connection.threadId);
});

app.get('/musicas', (req, res) => {
    connection.query('SELECT * FROM musica', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
});

app.listen(3000, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta 3000`);
});
