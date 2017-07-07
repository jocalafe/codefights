
//Given an array strings, determine whether it follows the sequence given in the patterns array. In other words, there should be no i and j for which strings[i] = strings[j] and patterns[i] ≠ patterns[j] or for which strings[i] ≠ strings[j] and patterns[i] = patterns[j].
//Example
//For strings = ["cat", "dog", "dog"] and patterns = ["a", "b", "b"], the output should be
//areFollowingPatterns(strings, patterns) = true;

function areFollowingPatterns(strings, patterns) {
  var patternValue = {}, stringCount = {};
  for (var i = 0; i < patterns.length; i++) {
    if (patternValue[patterns[i]] === undefined) {
      if (stringCount[strings[i]] === undefined) {
        patternValue[patterns[i]] = strings[i];
        stringCount[strings[i]] = 1;
      } else {
        return false;
      }
    } else if (patternValue[patterns[i]] !== strings[i]) {
      return false;
    }
  }
  return true;
}
