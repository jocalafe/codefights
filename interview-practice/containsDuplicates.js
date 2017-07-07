
//Given an array of integers, write a function that determines whether the array contains any duplicates. Your function should return true if any element appears at least twice in the array, and it should return false if every element is distinct.

//Example

//For a = [1, 2, 3, 1], the output should be
//containsDuplicates(a) = true.

function containsDuplicates(a) {
  var i;
  var intCount = {};
  for(i = 0; i < a.length; i++) {
    if(intCount[a[i]] === undefined){
      intCount[a[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
}
