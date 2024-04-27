/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const hierarquy = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
  let integer = 0

  for (let i = 0; i < s.length; i++) {
    console.log(integer)
    if (i === s.length - 1) {
      integer += integerReturn(s[i])
    } else {
      console.log(`${s[i]} ${s[i + 1]} ${hierarquy.findIndex((item) => item === s[i]) < hierarquy.findIndex((item) => item === s[i + 1]) }`)
      if (hierarquy.findIndex((item) => item === s[i]) < hierarquy.findIndex((item) => item === s[i+1])) {
        integer += integerReturn(s[i + 1]) - integerReturn(s[i]) 
        i++
      } else integer += integerReturn(s[i])
    }
  }
  return integer
}

var integerReturn = function (s) {
  if (s === 'I') {
    return 1
  } else if (s === 'V') {
    return 5
  } else if (s === 'X') {
    return 10
  } else if (s === 'L') {
    return 50
  } else if (s === 'C') {
    return 100
  } else if (s === 'D') {
    return 500
  } else if (s === 'M') {
    return 1000
  }
}

console.log(romanToInt('MCMXCIV'))