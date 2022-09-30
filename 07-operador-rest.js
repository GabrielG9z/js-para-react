<<<<<<< HEAD
/* 07-operador-rest

Usando o... como operador rest ()
Na prática, usamos para mesclar uma lista de argumentos/parâmetros para uma função */

const  ordendar = (...parametros) => {
    return parametros.sort();
}



console.log( ordendar('Lucas', 'Antonio', 'Adriel'));

console.log( ordendar('Rush', 'Pink Floyd', 'Dream Theater', 'Slayer', 'Nightwish'));

const array  = ['paçoca','popotao', 'grandao', 'pão', 'vassoura', 'panela', 'lua'];
 console.log( ordendar(...array)); //spread

const ordem = ordenar =>console.log(ordenar(array))

/* function soma(...valores){
    let total = 0

    for(let valor of valores){
        total+= valor;
    }

    return total;
} */

//Arrow Function

const soma = (total, valor) => {
   return  total += valor
}


console.log(soma(1, 4))
console.log(soma(10, 10, ));
console.log(soma(5, 1,))
=======
/* 07-operador-rest.js

Usando o ... como operador rest () 
Na prática, usamos para mesclar uma lista de argumentos/parâmetros
para uma função */

// rest
const ordenar = ( ...parametros ) => parametros.sort();

console.log( ordenar('Lucas', 'Antonio', 'Adriel') );
console.log( ordenar('Rush', 'Pink Floyd', 'Dream Theater', 'Slayer', 'Nightwish') );

console.log('===============');

const cursos = ["React", "Angular", "Vue", "Node.js", "PHP", "SQL"];
console.log(cursos);
console.log( ordenar(...cursos) ); // spread


console.log('===============');

const soma = (...valores) => {
    let total = 0;

    for(let valor of valores){
        total += valor;
    }

    return total;
}

console.log( soma(10, 20) );
console.log( soma(5, 1, 70, 45, 5) );


>>>>>>> ca1b0a48858fac92c551ae35be913a72302bfae7
