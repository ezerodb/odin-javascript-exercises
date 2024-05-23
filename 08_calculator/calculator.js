const add = function() {
  const args = Array.from(arguments);

  const total = args.reduce((total, currentItem) => {
    return total + currentItem;
  })

  return total;
};

const subtract = function() {
  const args = Array.from(arguments);

  const total = args.reduce((total, currentItem) => {
    return total - currentItem;
  })

  return total;
};

const sum = function() {
  const args = arguments[0];

  if (args.length === 0) {
    return 0;
  }

  const total = args.reduce((total, currentItem) => {
    return total + currentItem;
  })

  return total;
};

const multiply = function() {
  const args = arguments[0];

  if (args.length === 0) {
    return 0;
  }

  const total = args.reduce((total, currentItem) => {
    return total * currentItem;
  })

  return total;
};

const power = function() {
	const args = Array.from(arguments);

  let total = 0;
  for (let i = 0; i < args[1] - 1; i++) {
    if (total === 0) {
      total += args[0] * args[0];
    } else {
      total = args[0] * total;
    }
  }
  return total;
};

const factorial = function(n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
