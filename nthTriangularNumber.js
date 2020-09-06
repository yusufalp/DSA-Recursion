function nthTriangularNumber(result, ind, num) {
  if (ind >= num) {
    return result
  }

  console.log(result)
  nthTriangularNumber(result += ind, ind + 1, num)
}

nthTriangularNumber(1, 2, 11)