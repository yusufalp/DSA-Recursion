function powerCalculator(num, exp) {
  if (exp < 0) {
    return `exponent should be greater than or equal to 0`
  }
  if (exp <= 0) {
    return 1
  }
  return num * powerCalculator(num, exp - 1)
}

powerCalculator(5, 3)