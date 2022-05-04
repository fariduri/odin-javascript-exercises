const repeatString = function(text, num) {
    let outText = '';
    for(let i = 0; i<num; i++)
    {
        outText = outText.concat(text);
    }

    return outText;
};

// Do not edit below this line
module.exports = repeatString;
