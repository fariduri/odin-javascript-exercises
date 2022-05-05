const palindromes = function (text) {
    reversedText = reverseString(text);
    return reversedText == text;
};

const reverseString = function(text) {

    let newText = '';
    for (let i = 1; i < text.length+1 ; i++)
    {
        newText = newText.concat(text.substr(-i, 1));
    }
    return newText;
};
// Do not edit below this line
module.exports = palindromes;
