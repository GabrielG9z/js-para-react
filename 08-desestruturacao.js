/* 08-desestruturação.js

Desestruturação (Destruturing)
Extrair dados facilmente de um array ou objeto e armazená-los em variáveis/constantes
*/

//Usando desestruturação em arrays
const [a,b] = ['Lucas', 'Matheus'];
console.log(a);
console.log(b);

const alunos = ['adriel', 'palloma', 'ignacio'];
const [adriel, palloma, ignacio] = alunos;

const unidades = ['Penha', 'Tatuapé', 'Itaquera', 'São Miguel Paulista'];
const [penha, tatuape, , smp] = unidades; //Pulando itaquera

console.log(penha);
console.log(tatuape);
console.log(smp);

console.log('========================');

//Usando desestruturação em objetos
const {nome, cidade} = {nome: 'Fulano', idade: 18, cidade: 'São Paulo'}
console.log(nome)
console.log(cidade)

const dados = {
    nome: 'Jesus',
    curso: 'JavaScript',
    nascimento: '25/12/0000'
}
// Definindo um alias (apelido) para nome, Somente podemos usar alias em objetos, arrays não aceitam esse tipo.
const {nome: aluno, curso } = dados;
console.log(aluno);
console.log(curso)