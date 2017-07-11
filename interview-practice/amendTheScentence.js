
//You have been given a string s, which is supposed to be a sentence. However, someone forgot to put spaces between the different words, and for some reason they capitalized the first letter of every word. Return the sentence after making the following amendments:

//Put a single space between the words.
//Convert the uppercase letters to lowercase.

function amendTheSentence(s) {
    var amendedSentence = s[0].toLowerCase(), i;
    for (i = 1; i < s.length; i += 1) {
        if (s[i].charCodeAt(0) < 97) {
            amendedSentence += ' ' + s[i].toLowerCase();
        } else {
            amendedSentence += s[i];
        }
    }
    return amendedSentence;
}
