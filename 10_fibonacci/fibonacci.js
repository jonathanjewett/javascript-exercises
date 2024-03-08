const fibonacci = function(x) {
  // n = (n - 1) + (n - 2)
  let n = parseInt(x);
  if (n < 0) {
    return 'OOPS';
  }
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);

};

// Do not edit below this line
module.exports = fibonacci;
