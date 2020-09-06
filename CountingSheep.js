function countingSheep(num) {
  if (num === 0) {
    return "All sheep jumped over";
  }
  console.log(`${num}: Another sheep jumped over the fence`)
  return countingSheep(num - 1);
}

countingSheep(3);