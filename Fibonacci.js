let result = 0;
let fir = 1;
let sec = 1;
function fibonacci(num) {

  if (num < 2) {
    return fir
  }

  num--;
  result = fir + sec
  fir = sec
  sec = result

  return fibonacci(num)
}

fibonacci(7)