function binaryOp(num) {
  if (num < 1) {
    return ''
  }

  let remainder = num % 2
  return binaryOp(parseInt(num / 2)) + remainder.toString()
}

binaryOp(25)