function reverseString(str) {
  if (str.length <= 0) {
    return ''
  }
  return reverseString(str.slice(1)) + str.slice(0, 1)
}

let result = ''
function binaryOp(num) {
  if (num < 1) {
    return result
  }

  remainder = num % 2
  result += remainder.toString()

  return reverseString(binaryOp(parseInt(num / 2)))
}

binaryOp(19)