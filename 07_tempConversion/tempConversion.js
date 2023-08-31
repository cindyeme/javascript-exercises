const convertToCelsius = function (fahrenheit) {
  const convert = ((fahrenheit - 32) * (5 / 9)).toFixed(1);

  return parseFloat(convert);
};

const convertToFahrenheit = function (celsius) {
  const convert = ((celsius * 9 / 5) + 32).toFixed(1);
  
  return parseFloat(convert);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
