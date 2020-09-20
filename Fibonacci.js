let result = 0;
let fir = 1;
let sec = 1;
function fibonacci(num) {

  if (num <= 1) {
    return result
  }

  num--;
  console.log(fir, sec, result)
  result = fir + sec
  fir = sec
  sec = result

  return fibonacci(num)
}

fibonacci(7)