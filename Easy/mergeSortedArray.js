/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Eh necessario voltar um array com a juncao de dois ordenado de forma crescente
// a logica sera iterar durante nums1, achar onde comeca o zero e comecar a atribuir os valores a partir disso
// n sendo lenght de nums2 subtraido ao index 

var merge = function (nums1, m, nums2, n) {
  let j = 0
  for (let i = 0; i < m+n; i++) {
    if (i >= m) {
      nums1[i] = nums2[j]
      j++
    }
  }
  nums1.sort((a,b) => a-b)
}

// [1,2,3,0,0,0] m = 3
// [3,4,5] n = 3
