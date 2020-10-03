function fibonacci(n) {
  if (n === 0 || n === 1) {
    return 1
    const result = fibonacci(n - 1) + fibonacci(n - 2)
    return result
  }
}

fibonacci(7)