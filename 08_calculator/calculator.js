const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	let total = 0;
  for (let num of numbers)
    total += num;
  
  return total;
};

const multiply = function(numbers) {
  let total = 1;
  for (let num of numbers)
    total *= num;
  
  return total;
};

const power = function(num, power) {
	let result = 1;
  for (let count = 0; count < power; count++)
    result *= num;

  return result;
};

const factorial = function(num) {
	let result = 1
  if (num == 0)
    return result;
  else
  {
    for (let i = 1; i <= num; i++)
    {
      result = multiply([result, i]);
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
