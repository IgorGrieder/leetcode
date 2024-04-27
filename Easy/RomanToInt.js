// problema consiste em receber uma string, um numero romano e transformar em um inteiro
// sabemos que tem uma ordem de numeros romandos e vou criar um map com elas com a key sendo a letra e o value o int dela
// analisar a string do comeco ao fim
// com uma condicao de que se o proximo algarismo for maior que o atual, eh feita uma subtracao entre eles
// pular esse index por ja ter analisado ambos

var romanToInt = function (s) {
  const romans = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let int = 0

  for (let i = 0; i < s.length; i++) {
    if (romans[s[i]] < romans[s[i+1]]) {
      int += romans[s[i+1]] - romans[s[i]]
      i++ // pular o numero que ja foi analisado
    } else int += romans[s[i]]
  }

  return int
}

console.log(romanToInt('III'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))
