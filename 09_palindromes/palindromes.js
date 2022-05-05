const palindromes = function (text) {
    let cleanText = text.toUpperCase();
    cleanText = cleanText.replace(/[/s.!,&]/g, '');

    let reversedCleanText = reverseString(cleanText);
    
    return reversedCleanText == cleanText;
};

const reverseString = function(text) {

    let newText = '';

    for (let i = 1; i < text.length+1 ; i++)
        newText = newText.concat(text.substr(-i, 1));
    
    return newText;
};
// Do not edit below this line
module.exports = palindromes;
