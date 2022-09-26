const _ = require('lodash');

const alunos = [{
    nome: 'Felipe',
    nota: 10
}, {
    nome: 'Aurea',
    nota: 8
}, {
    nome: 'Guilherme',
    nota: 4
}];

const media = _.sumBy(alunos, 'nota') / alunos.length;
console.log(media);