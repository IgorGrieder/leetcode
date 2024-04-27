/**
 * @param {string} s
 * @return {number}
 */

/*
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/


// receber uma string e ver a subsequencia com maior tamanho
// iterar pela string e ir armazenando em um array as letras
// analisar se durante essa iteracao a palavra ja esta dentro do array -> caso ela esteja, comparar o length desse array e zerar ele para continuar
// procurando uma palavra maior
// caso tenha incluido, lembrar de reiniciar o novo array com essa letra faltante
// se o proximo for maior do que o armazenado na variavel trocar

var lengthOfLongestSubstring = function(s) {
  let arrayControl = []
  let maxLength = 0
  let again = 0

  for (let i = 0; i < s.length; i++) {
    if (arrayControl.includes(s[i])) { // checando se comporta a letra
      if (s[i] === s[i-1]) { // se comportar e a passada for diferente da repetida, comecar a observar da de traz
        arrayControl = [s[i]] // caso seja igual continuar do proprio index
      } else { // caso seja diferente voltar uma casa de comparacao e voltar a analisar
        arrayControl = [s[i-1]]
        i--
      }
    } else { // se nao tiver presente adicionar no array e ver se agora o novo tamanho eh maior o nao
      arrayControl.push(s[i])
      if (maxLength < arrayControl.length) {
        maxLength = arrayControl.length
      }
    }

    if (i + 1 < s.length && again === 0) { // recomecando de novo a observar uma vez caso tenha alguma subsequencia maior considerando o fim da string
      i = 0
      again++
    } 
  }

  return maxLength
}

console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('abcabcbb'))

console.log(lengthOfLongestSubstring('au'))
console.log(lengthOfLongestSubstring(' '))