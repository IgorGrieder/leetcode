// criar um programa que recebe a matriz de pecas e retorne a palavra escrita
// eh necessario montar o quebra cabecas e retornar a string que forma
// o numero inicial tem na esquerda 0, o final tem na direita 1!
// logica 
// pegar a primeira letra achando qual comeca com 0 e a partir disso verificar qual o proximo numero, de acoro com o valor da direita dessa peca
// iterar pelo array procurando o match desse numero
// quando ele achar, adicionar na string e substituir esse next com esse valor

const quebraCabeca = (nums, tamanho) => {
  let answ = ''

  let primeiraPeca = nums.find((item) => item[0] === 0)
  let next = primeiraPeca[2]

  answ += primeiraPeca[1]

  for (let k = 0; k < tamanho - 1; k++) {
    for (let i = 0; i < tamanho; i++) {
      if (nums[i][0] === next) {
        answ += nums[i][1]
        next = nums[i][2]
      }
    }
  }

  return answ
}

const QuebraCabeca = (nums, tamanho) => {
  let answ = ''
  let next
  const controlLeft = {}
  const controlRight = {}

  // encontrar a primeira peca e mapear
  for (let i = 0; i < tamanho; i++) {
    if (controlLeft[nums[i][0]] === undefined) {
      controlLeft[nums[i][0]] = nums[i][1]
    }
    if (controlRight[nums[i][1]] === undefined) {
      controlRight[nums[i][1]] = nums[i][2]
    }

    if (nums[i][0] === 0) {
      answ += nums[i][1]
      next = nums[i][2]
    }
  }

  for (let k = 0; k < tamanho - 1; k++) {
    answ += `${controlLeft[next]}`
    next = controlRight[answ[answ.length - 1]]
  }

  return answ
}

const quebra = [[0, 'I', 4], [10, 'r', 1], [4, 'g', 6], [6, 'o', 10]]
const size = 4
console.log(QuebraCabeca(quebra, size))