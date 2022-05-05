const ftoc = function(fahrenheit) {
  return ((fahrenheit - 32)*5/9);
};

const ctof = function(celsius) {
  return (celsius * 9/5+32);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
