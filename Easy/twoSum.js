/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// nesse problema vou receber um array de numeros
// caso a soma de dois numeros seja o target, retornar o indice dos numeros
var twoSum = function (nums, target) {
  const answer = [] // inicializando o array com a resposta
  
  // preciso analisar as combinacoes de somas de todos os numeros
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) { // caso a soma seja igual a target setar resposta
        answer.push(i)
        answer.push(j)
      }
    }
  }
  

  return answer
};