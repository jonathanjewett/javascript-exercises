const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(array) {
  return array.reduce ((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(x, y) {
  if (y === 0) {
    return 1;
  }

  let result = 1;
  for (let i = 0; i < y; i++) {
    result = result * x;
  }

  return result;
};

const factorial = function(n) {
  // n! = n * (n - 1) * (n - 2) * (n - 3)...
  // n! = n * (n - 1)!
  if (n === 1 || n === 0) {
    return 1;
  }

  return n * (factorial(n - 1));
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
