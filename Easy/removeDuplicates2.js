/**
 * @param {number[]} nums
 * @return {number}
 */

// problema de remover duplicatas in place
// detalhe, o numero pode repetir duas vezes!
// minha logica sera a seguinte, vou ter uma variavel que ira armazenar o valor temporario e um contador
// caso o numero que eu estou seja igual ao temporario e o contador seja 0, eu armazeno ele em index incremento index e o contador
// caso o numero seja igual ao temporario e o contador seja > 0, faco nada so continuo percorrendo
// caso seja outro numero eu zero o contador e mudo a referencia do nosso temporario

var removeDuplicates = function (nums) {
  let index = 1
  let temporary = nums[0]
  let count = 0

  for (let i = 1; i < nums.length; i++) {
    if (temporary === nums[i]) {
      if (count === 0) {
        nums[index] = nums[i]
        index++
        count++
      }
    } else {
      nums[index] = nums[i]
      index++
      count = 0
      temporary = nums[i]
    }
  }

  return {nums,index}
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]))