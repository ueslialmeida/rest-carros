'use strict';
module.exports = function(app){
    var carroList = require('../controller/carroController');

    // rotas disponíveis na API
    app.route('/carros')
    .get(carroList.lista_todos_carros)
    .post(carroList.inserir_carro);

    // rota com ID de algum carro
    app.route('/carros/:carroId')
    .get(carroList.carro_info)
    .put(carroList.atualizar_info_carro)
    .delete(carroList.deletar_carro);
};