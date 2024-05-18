const convertToCelsius = function(temp) {
  let celsius = (temp - 32) * (5/9);
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = (temp * (9/5)) + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
