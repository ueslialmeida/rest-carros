/**
 * Controller que atende as requisições e delega tarefas para o Model
 */

'use strict';

var Carro = require('../model/carroModel.js'); // importa o model

// propriedade que chama o método que lista todos os carros
exports.lista_todos_carros = function(req, res){
    Carro.getTodosCarros(function(err, carro){
        console.log('controller');
        if(err){
            res.send(err);
            console.log('res', carro);
        }

        res.send(carro);
    });
};

// propriedade que chama o método que insere um carro
exports.inserir_carro = function(req, res){
    var novo_carro = new Carro(req.body);

    // trata erros de propriedades nulas
    if(!novo_carro.modelo || !novo_carro.cor){
        res.status(400).send({error : true, message : 'Por favor informe o modelo e a cor do carro!'});
    }
    else{
        Carro.insertCarro(novo_carro, function(err, carro){
            if(err){
                res.send(err);
            }

            res.json(carro);
        });
    }
};

// propriedade que chama o método que retorna os dados de um carro
exports.carro_info = function(req, res){
    Carro.getCarroById(req.params.carroId, function(err, carro){
        if(err){
            res.send(err);
        }

        res.json(carro);
    });
};

// propriedade que chama o método que atualiza os dados de um carro
exports.atualizar_info_carro = function(req, res){
    Carro.update(req.params.carroId, new Carro(req.body), function(err, carro){
        if(err){
            res.send(err);
        }
        
        res.json(carro);
    });
};

// propriedade que chama o método que deleta um carro do banco de dados
exports.deletar_carro = function(req, res){
    Carro.remove(req.params.carroId, function(err, carro){
        if(err){
            res.send(err);
        }

        res.json({message : 'Carro deletado com sucesso!'});
    });
};