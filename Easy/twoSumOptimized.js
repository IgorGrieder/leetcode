/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// receber um array de numeros e ver se a soma deles eh igual ao target
// nessa versao, primeiro vou criar um map com os valores de key e value o ultimo index q eles aparecenm
// depois, iterar pelo array procurando se dentro do array tem algum valor que completa para a soma
// target = numArray + numSearch
// numSearch = target - numArray

var twoSum = function (nums, target) { 
  const map = {}
  const answer = []

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i
  }

  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined && map[target - nums[i]] !== i) { // por exemplo, imagine que nums[0] eh um 3 e target = 3 retornaria [0,0]
      answer.push(i)
      answer.push(map[target - nums[i]])
      return answer
    }
  }

  return answer
}

console.log(twoSum([3, 2, 4], 6))