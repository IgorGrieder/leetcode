/**
 * @param {number[]} nums
 * @return {number}
 */

// objetivo e ter o elemento que mais aparece
// voce sabe que um elemento eh o que mais aparece caso ele apareca n / 2 vezes
// logica
// iterar sobre o array e armazenar em um dicionario quantas vezes esse numero aparece e vou checar se em algum momento sera maior que n/2
// fazer a checagem no mesmo processo para ser O(n)

var majorityElement = function (nums) {
  const maior = Math.floor(nums.length/2)
  const mapeamento = {}

  for (let i = 0; i < nums.length; i++) {
    if (mapeamento[nums[i]] === undefined) {
      mapeamento[nums[i]] = 1
    } else {
      mapeamento[nums[i]] = mapeamento[nums[i]] + 1
      if (mapeamento[nums[i]] > maior) {
        return nums[i]
      }
    }
  }

  return nums[0] // caso de ter apenas um numero
};