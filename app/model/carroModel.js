/**
 * Classe modelo para o Carro
 * aqui encontram-se as funções de manipulação dos dados no banco de dados
 */

'use strict';

var sql = require('./database.js'); // importa a conexão com o banco de dados

// construtor do objeto carro inicianlizando as propriedades
var Carro = function(carro){
    this.modelo = carro.modelo;
    this.ano = carro.ano;
    this.cor = carro.cor;
};

/**
 * função que faz a insert de um carro no banco de dados
 */
Carro.insertCarro = function insertCarro(newCarro, result){
    sql.query('INSERT INTO carro set ?', newCarro, function(err, res){
        if (err){
            console.log('Erro: ', err);
        }
        else{
            console.log(res.insertId);
            result(null, 'Carro inserido com sucesso! ID: ' + res.insertId);
        }
    });
};

/**
 * função que recupera um carro do banco por um ID específico 
 */
Carro.getCarroById = function getCarroById(carroId, result){
    sql.query('SELECT * FROM carro WHERE id = ?', carroId, function(err, res){
        if(err){
            console.log('Erro: ', err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

/**
 * função que recupera todos os carros cadastrados no banco de dados
 */
Carro.getTodosCarros = function getTodosCarros(result){
    sql.query('SELECT * FROM carro', function(err, res){
        if(err){
            console.log('Erro: ', err);
            result(null, err);
        }
        else{
            console.log('Carros: ', res);
            result(null, res);
        }
    });
};

/**
 * função que atualiza os dados de um carro existente no banco de dados
 */
Carro.update = function(id, carro, result){
    sql.query('UPDATE carro SET modelo = ?, ano = ?, cor = ? WHERE id = ?', [carro.modelo, carro.ano, carro.cor, id], function(err, res){
        if(err){
            console.log('Error: ', err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

/**
 * função que remove um carro do banco de dados
 */
Carro.remove = function(id, result){
    sql.query('DELETE FROM carro WHERE id = ?', [id], function(err, res){
        if(err){
            console.log('Erro: ', err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

// exporta o módulo que contém essas funções
module.exports = Carro;