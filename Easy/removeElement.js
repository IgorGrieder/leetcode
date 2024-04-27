/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// precisa retornar nums modificado com os primeiros numeros sendo aqueles que nao sao o valor,
// o retorno mesmo da funcao deve ser o tamanho dos elementos desse novo array
// para isso, vou iterar sobre o array e verificar se eh igual ao numero 
// se for igual 
var removeElement = function (nums, val) {
  let k = 0
  const arrayFilter = nums.map((item) => {
    if (item !== val) {
      k++
      return item
    } else return 10000
  })

  nums = [...arrayFilter.sort((a,b) => a - b)]
  console.log(nums)
  return k
}

var removeElement = function (nums, val) {  // forma correta sem criar mais espaco de memoria! Utilizando um ponteiro para outra posicao
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }

  return index;
};

// ideia de ter dois ponteiros -> simualr no excalidraw para vizualizacao!