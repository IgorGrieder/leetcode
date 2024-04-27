// Criando as linked Lists
// 2 -> 4 -> 3
let node2 = {val: 3, next: null}
let node1 = {val: 4, next: node2}
let linkedList1 = {val: 2, next: node1}

// 5 -> 6 -> 4
let node21 = {val: 4, next: null}
let node11 = {val: 6, next: node21}
let linkedList2 = {val: 5, next: node11}

// Pensamentos
// percorrer e armazenar em um array todos os numeros
// percorrer o array e ir somando a uma variavel o valor com a seguinte logica
// ja que temos o tamanho do array, vamos fazer array[i]*math.pow(10, array.length - 1 - i) -> essa logica definiu por que utilizar um array para tal

var addTwoNumbers = function (l1, l2) {

  const arrayL1 = intoArray(l1)
  const arrayL2 = intoArray(l2)

  // transoformar o array em um numero de acordo com a logica acima
  const acc1 = intoNumber(arrayL1)
  const acc2 = intoNumber(arrayL2)
  const sum = acc1+acc2

  const answer = sum.toString().split('').reverse().map((item) => parseInt(item))

  return answer
}

const intoArray = (list) => {
  const array = []

  let nodeOfList = list // apontando para o primeiro valor da lista
  // percorrer uma lista encadeada
  while (nodeOfList !== null) {
    array.push(nodeOfList.val)
    nodeOfList = nodeOfList.next // iterando durante todo a linkedi list e retornando para um array
  }

  return array
}

const intoNumber = (arr) => {
  let num = 0

  // iterar sobre o array salvando o numero
  for (let i = 0; i < arr.length; i++) {
    num += arr[i]*Math.pow(10, arr.length - 1 - i)
  }

  return num
}

console.log(addTwoNumbers(linkedList1, linkedList2))
