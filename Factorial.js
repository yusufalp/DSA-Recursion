function factorial(n) {
  let result = 1;
  if (n < 1) {
    return result;
  }
  return n * factorial(n - 1);

}

factorial(4)