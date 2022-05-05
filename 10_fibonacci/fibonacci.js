const fibonacci = function(num) {
    let fn = 1;
    let fn_1 = 1;
    let fn_2 = 0;

    if(num == 0)
        return 0;
    else if(num == 1)
        return 1;
    
    for (let n = 2; n <= num; n++)
    {
        fn = fn_2 + fn_1;
        console.log(`f(${n}) = f(${n}-2) + f(${n}-1)\nf(${n}) = ${fn_2} + ${fn_1} = ${fn}`);
        
        fn_2 = fn_1;
        fn_1 = fn;
    }

    return fn;
    /**
     * f(0) = 0
     * f(1) = 1
     * f(2) = f(0) + f(1) = 1
     * f(3) = f(1) + f(2) = 2
     * f(4) = f(2) + f(3) = 3
     * f(5) = f(3) + f(4) = 5
     * 
     * f(0) = 0
     * f(1) = 1
     * f(n) = f(n-2) + f(n-1)
     * 
     */
};

// Do not edit below this line
module.exports = fibonacci;
