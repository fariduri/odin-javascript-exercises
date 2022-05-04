const sumAll = function(cap1, cap2) {
    if ((typeof(cap2) == 'number') && (typeof(cap2) == 'number') && cap2>=0 && cap1>=0)
        return ((Math.abs(cap2-cap1)+1)/2*(cap1+cap2));
    else
        return 'ERROR'; 
};

// Do not edit below this line
module.exports = sumAll;
