i1 = charsRemover('a-b-c', ['-'])
function charsRemover(str, charArr) {
  for (let i = 0; i < charArr.length; i++) {
    str = str.replace(new RegExp(charArr[i], 'g'), '');
  }
  return str;
}
console.log(i1)