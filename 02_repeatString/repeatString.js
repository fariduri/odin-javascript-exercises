const repeatString = function(text, num) {
    let outText = '';
    if(num == -1)
        return 'ERROR';
    else
        for(let i = 0; i<num; i++)
            outText = outText.concat(text);

    return outText;
};

// Do not edit below this line
module.exports = repeatString;
