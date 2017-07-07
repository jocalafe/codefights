function firstDuplicate(a) {
    var i, seenNumbers = {};
    for (i = 0; i < a.length; i+=1) {
        if (seenNumbers[a[i]] === undefined) {
            seenNumbers[a[i]] = 1;
        } else {
            return a[i];
        }
    }
    return -1;
}
