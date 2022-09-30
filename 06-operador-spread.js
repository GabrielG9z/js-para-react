<<<<<<< HEAD
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
=======
/* Usando o ... como operador spread (espalhar) 
Na prática, copiamos o conteúdo de um array (bandas) para dentro 
de outro (maisBandas) 

IMUTABILIDADE (não muda) */
const bandas = ['Rush', 'Dream Theater', 'Slayer', 'Black Sabbath'];
const maisBandas = [...bandas, 'Van Halen', 'Deep Purple'];

console.log(maisBandas);

console.log('============================');

// Spread com objeto
const dados = {
    nome: 'Palloma',
    idade: 21
>>>>>>> ca1b0a48858fac92c551ae35be913a72302bfae7
};

const novosDados = {
    ...dados,
    cidade: 'São Paulo',
    estado: 'SP',
<<<<<<< HEAD
    idade: 23 //Sobrescrevendo o valor somente da propriedade idade
}

console.log(novosDados);
console.log('Idade atualizada: '+novosDados.idade);
console.log(dados);
=======
    idade: 25 // sobrescrevendo o valor somente da propriedade idade
}

console.log(novosDados); // novo objeto contendo os dados do anterior também
console.log('Idade atualizada: '+novosDados.idade);   
console.log(dados); 
>>>>>>> ca1b0a48858fac92c551ae35be913a72302bfae7
