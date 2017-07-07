
//Note: Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be asked to do during a real interview.

//Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

//Example

//For s = "abacabad", the output should be
//firstNotRepeatingCharacter(s) = 'c'.

function firstNotRepeatingCharacter(s) {
  var i;
  var charCount = {};
  for (i = 0; i < s.length; i += 1) {
    if (charCount[s[i]] === undefined) {
      charCount[s[i]] = 1;
    } else {
      charCount[s[i]] += 1;
    }
  }
  for (char in charCount) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return '_';
}

