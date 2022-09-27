/* Usando o... como operador spread (espalhar)
    Na prática, copiamos o conteúdo de um array (bandas) para dentro de outro (maisBandas)
IMUTABILIDADE (não muda) */

const bandas = ['Rush', 'Dream Theater', 'Slayer', 'Black Sabbath'];
const maisBandas = [...bandas, 'Van Halen', 'Deep Purple'];

//console.log(maisBandas);

//Spread com objeto 
const dados = {
    nome: 'Gabriel',
    idade: 22
};

const novosDados = {
    ...dados,
    cidade: 'São Paulo',
    estado: 'SP',
    idade: 23 //Sobrescrevendo o valor somente da propriedade idade
}

console.log(novosDados);
console.log('Idade atualizada: '+novosDados.idade);
console.log(dados);