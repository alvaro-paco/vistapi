var axios = require('axios');

var api ={ 
    key: 'ee16bc608fe3615f542e32c65abe7813',
    endpoint: 'http://gruposou-rest.vistahost.com.br',
    fields: '"fields":["Codigo","Categoria","Bairro","Cidade","ValorVenda","ValorLocacao","Dormitorios","Suites","Vagas","AreaTotal","AreaPrivativa","Caracteristicas","InfraEstrutura"],"order":{"Bairro":"asc"}',
    limit: '"quantidade":50'
};

module.exports = {
    listarImoveis: (page, cb) => {
        let urlQuery = api.endpoint + '/imoveis/listar?key='+ api.key +'&showtotal=1&pesquisa={' + api.fields + ',"paginacao":{"pagina":' + page + ',' + api.limit + '}}';
        axios.get(urlQuery, { headers: {'Accept': 'application/json'}, data: {} })
        .then((response) => {
            return cb(null, response);
        })
        .catch((err) => {
            return cb(err, null);
        })
    }
}