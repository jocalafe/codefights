
//All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T. In research, it can be useful to identify repeated sequences within DNA.

//Write a function to find all the 10-letter sequences (substrings) that occur more than once in a DNA molecule s, and return them in lexicographical order. These sequences can overlap.

//Example

//For s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT", the output should be
//repeatedDNASequences(s) = ["AAAAACCCCC", "CCCCCAAAAA"].

function repeatedDNASequences(s) {
  var secuenceCount = {};
  var letter = '';
  var resulstsDNA = [];
  var i, secuence;
  for (i = 0; i <= s.length - 10; i++) {
    letter = s.substring(i,i + 10);
    secuenceCount[letter] = secuenceCount[letter] == undefined ? 1 : secuenceCount[letter] + 1;
  }
  for (secuence in secuenceCount) {
    if (secuenceCount[secuence] > 1)
      resulstsDNA.push(secuence);
  }
  return resulstsDNA.sort();
}
