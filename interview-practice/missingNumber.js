function missingNumber(arr) {
  var missingNumer = (arr.length * (arr.length + 1)) / 2;
  var i;
  for (i = 0; i < arr.length; i += 1) {
    missingNumer -= arr[i];
  }
  return missingNumer;
}
