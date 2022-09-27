class Pessoa {
    // Propriedades
    nome = 'sem nome';
    genero = 'não informado';
    idade = 0;

    // Métodos
    mostraGenero() {
        console.log( this.genero );
    }

    mostraNome(){
        console.log( this.nome );
    }

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
    }
}

/* Criando objetos/instâncias */
let umaPessoa = new Pessoa;
umaPessoa.nome = 'Gabriel';
umaPessoa.genero = 'Masculino';
umaPessoa.idade = 22;

console.log(umaPessoa);


//Objeto herdando recursos
 let aluno = new Aluno;
aluno.nome = 'jOÁ';
aluno.genero = 'Masculino';
aluno.matricula = '123hahah';
aluno.curso = 'JS para React';
aluno.idade = 22;
aluno.calculaIdade(); 





