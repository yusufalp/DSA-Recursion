function stringSplitter(str, sep) {
  if (!str.includes(sep)) {
    return str // 02 20 2020
  }
  return stringSplitter(str.replace(sep, ' '), sep)
}

stringSplitter('02/20/2020', '/')