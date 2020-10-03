function anagram(str, prefix = '') {
  if (str.length === 1) {
    console.log(prefix + str)
    return
  }
  for (let i = 0; i < str.length; i++) {
    let firstLetter = str[i]
    let remainderLetter = str.substring(0, i) + str.substring(i + 1)
    // console.log(firstLetter, remainderLetter)
    anagram(remainderLetter, prefix + firstLetter)
  }
}

anagram('east')