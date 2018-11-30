/* 
    configuração do servidor 
*/

// inicializa as variaveis
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const mysql = require('mysql');

// configura a conexão com o bannco de dados
const mysqlConnection = mysql.createConnection(
    {
        host        : 'localhost',
        user        : 'root',
        password    : 'root',
        database    : 'restcarros'
    }
);

mysqlConnection.connect(); // abre a conexão com o banco

app.listen(port); // inicializa a aplicação escutando na porta 3000

console.log('API inicializou na porta: ' + port); // loga no console que o servidor foi iniciado

// configura o middleware que passa o corpo da requisição como JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/routes'); //importa o arquivo de rotas
routes(app); //registra o arquivo de rotas