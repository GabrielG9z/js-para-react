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