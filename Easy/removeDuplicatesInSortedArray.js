/**
 * @param {number[]} nums
 * @return {number}
 */

// remover os numeros duplicados de um array
// outra abordagem
// vou andar pelo vetor e analisar se eh igual a variavel temporaria
// caso ele seja, eu nao faco nada e continuo iterando no array
// se ele for diferente, eu coloco ele em nums[index] e mudo a temporaria para ele
var removeDuplicates = function (nums) {
  let index = 1
  let temporary = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (!(nums[i] === temporary)) {
      nums[index] = nums[i]
      index++
      temporary = nums[i]
    }
  }

  return index
}


var removeDuplicates = function (nums) { // forma correta sem criar mais espaco de memoria! Utilizando um ponteiro para outra posicao
  let index = 1

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i+1]) {
      nums[index] = nums[i+1]
      index++
    }
  }

  return index
}

// ideia de ter dois ponteiros -> simualr no excalidraw para vizualizacao!

