/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// consegui perfetiamente mas no leetcode nao aceitou o 37 de 38 pq teve k = 54999 e deu run time error, em todos os outros foi aprovado
// rotacionar um array de acordo com o numero k de mudancas
// k = 3 quer dizer que o cada index moverá 3 casas para a direita, sendo o terceiro movimento o destino
// fazer um loop de fora que itera x vezes de rotacao
// fazer um loop de dentro que faz a rotacao item por item
// logica da rotacao
// comecar do index 1 e fazer com que todos recebam o passado e armazenar em uma variavel next o seguinte 
// quando cehgar na ultima iteracao fazer nums[0] = next
var rotate = function (nums, k) {
  k = k % nums.length
  let next
  for (let j = 0; j < k; j++) {
    next = nums[0]
    for (let i = 1; i < nums.length; i++) {
      if (i + 1 < nums.length) {
        let aux = nums[i]
        nums[i] = next
        nums[0] = aux
      } else {
        let aux = nums[i]
        nums[i] = next
        next = aux
      }
    }
  }
};

rotate([1, 2, 3, 4, 5, 6, 7], 3)