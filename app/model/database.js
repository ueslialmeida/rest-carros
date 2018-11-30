/* aquivo de configuração do banco de dados */

'use strict';

var mysql = require('mysql'); // importa o módulo do MySQL

// configura os dados para conexção com o banco
var connection = mysql.createConnection(
    {
        host        : 'localhost',
        user        : 'root',
        password    : 'root',
        database    : 'restcarros'
    }
);

// faz conexão com o banco e testa se houve erro, caso true lança a exception
connection.connect(function(err){
    if (err) throw err;
});

// exporta a conexão com o banco
module.exports = connection;