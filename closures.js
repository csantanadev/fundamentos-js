const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * Objetivo: Multiplicar os valores do array por um valor passado, utilizando o conceito de closures.
 * 
 * Explicando: Passei o array para a funcao principal e um fator de multiplicação. Como o map espera uma funcao
 * foi passado para ele a funcao multiplicaPor que espera um fator e devolve outra fn multiplicando o fator pelo n em questão (esse n vem do map)
 * 
 */
function calcula(arr, fatorMultiplicacao) {

    const retorno = arr.map( multiplicaPor(fatorMultiplicacao) )

    function multiplicaPor(fator) {

      return function (n) {
        
        return n * fator
    
      }
    
    }
    
    return retorno
}

const retorno = calcula(arr, 10)

console.log(retorno)

































