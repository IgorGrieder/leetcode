// temos que receber um numero inteiro e transformar em um romano
// sabemos que tem um map do valor com as letras
// existem alguns valores chaves entre os numeros como o 4,9,40,90,400 e o 900, que sao representados como substracoes
// a logica sera a seguinte, de mil ate 1 checar se o numero divido por x é maior ou igual a 1. Se ele for, repetir esse algarismo pelo inteiro q for representado
// apos isso, passar adiante o resto da divisao do numero por x

var Oi = function (num) {
  let ans = ''
  const romans = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
    4: 'IV',
    9: 'IX',
    40: 'XL',
    90: 'XC',
    400: 'CD',
    900: 'CM',
  }

  if (num / 1000 >= 1) {
    ans += romans[1000].repeat(Math.floor(num/1000))
    num = num % 1000
  }

  if (num / 900 >= 1) {
    ans += romans[900]
    num = num % 900
  }

  if (num / 500 >= 1) {
    ans += romans[500].repeat(Math.floor(num / 500))
    num = num % 500
  }

  if (num / 400 >= 1) {
    ans += romans[400]
    num = num % 400
  }

  if (num / 100 >= 1) {
    ans += romans[100].repeat(Math.floor(num / 100))
    num = num % 100
  }

  if (num / 90 >= 1) {
    ans += romans[90]
    num = num % 90
  }

  if (num / 50 >= 1) {
    ans += romans[50].repeat(Math.floor(num / 50))
    num = num % 50
  }

  if (num / 40 >= 1) {
    ans += romans[40]
    num = num % 40
  }

  if (num / 10 >= 1) {
    ans += romans[10].repeat(Math.floor(num / 10))
    num = num % 10
  }

  if (num / 9 >= 1) {
    ans += romans[9]
    num = num % 9
  }

  if (num / 5 >= 1) {
    ans += romans[5].repeat(Math.floor(num / 5))
    num = num % 5
  }

  if (num / 4 >= 1) {
    ans += romans[4]
    num = num % 4
  }

  if (num / 1 >= 1) {
    ans += romans[1].repeat(Math.floor(num / 1))
    num = num % 1
  }

  return ans
}


var intToRoman = function (num) {
  const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const hrns = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const ths = ["", "M", "MM", "MMM"]; 

  return ths[Math.floor(num / 1000)] + hrns[Math.floor((num % 1000) / 100)] + tens[Math.floor((num % 100) / 10)] + ones[num % 10];
};