class Pessoa {
    // Propriedades
    nome = 'sem nome';
    genero = 'não informado';
<<<<<<< HEAD
    idade = 0;
=======
    idade;
>>>>>>> ca1b0a48858fac92c551ae35be913a72302bfae7

    // Métodos
    mostraGenero() {
        console.log( this.genero );
    }

    mostraNome(){
        console.log( this.nome );
    }

<<<<<<< HEAD
    calculaIdade(){
        console.log(this.idade)
        if(this.idade >= 18){
            console.log('maior');
        } else {
            console.log('menor');
        }

            // ternário
       // return this.idade >= 18 ? 'é maior' : 'é menor';
    }

}

class Aluno extends Pessoa {
    //Propriedades
    matricula;
    curso;

    //Métodos
    mostraDados(){
        console.log(this.matricula);
        console.log(this.curso);

        //Métodos da superClasse
        this.mostraNome();
        this.mostraGenero();
        this.calculaIdade();
=======
    verificaIdade(){
        /* if( this.idade >= 18 ){
            return 'é maior';
        } else {
            return 'é menor';
        } */

        /* if/else ternário */
        return this.idade >= 18 ? 'é maior' : 'é menor';
>>>>>>> ca1b0a48858fac92c551ae35be913a72302bfae7
    }
}

class Aluno extends Pessoa {
    // Propriedades
    matricula;
    curso;

    // Métodos
    mostraDados(){
        console.log(this.matricula);
        console.log(this.curso);

        // métodos da super classe
        this.mostraNome();
        this.mostraGenero();
    }
}








/* Criando objetos/instâncias */
let umaPessoa = new Pessoa;
umaPessoa.nome = 'Gabriel';
umaPessoa.genero = 'Masculino';
umaPessoa.idade = 22;

console.log(umaPessoa);

let outraPessoa = new Pessoa;
outraPessoa.nome = 'Mônica';

console.log(outraPessoa);


// Objeto herdando recursos
let aluno = new Aluno;
aluno.nome = 'Palloma';
aluno.genero = 'feminino';
aluno.matricula = '123abc';
aluno.curso = 'JS para React';

aluno.idade = 25;
console.log(aluno.nome);
console.log(aluno.idade);

console.log(
    aluno.verificaIdade()
);

//console.log(aluno);
aluno.mostraDados();

//Objeto herdando recursos
 let aluno = new Aluno;
aluno.nome = 'jOÁ';
aluno.genero = 'Masculino';
aluno.matricula = '123hahah';
aluno.curso = 'JS para React';
aluno.idade = 22;
aluno.calculaIdade(); 





