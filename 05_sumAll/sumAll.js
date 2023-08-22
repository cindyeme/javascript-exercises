const sumAll = function (num1, num2) {
  if (
    typeof num2 !== "number" ||
    typeof num1 !== "number" ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);
  let sumBetween = 0;

  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
};

// Do not edit below this line
module.exports = sumAll;
