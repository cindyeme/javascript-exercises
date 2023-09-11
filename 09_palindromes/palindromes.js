const palindromes = function (str) {
  const newStr = str.replace(/[\W_]/g, '').toLowerCase();
  const modWord = newStr.split("").reverse().join("");

  if (modWord === newStr) {
    return true;
  }

  return false;
};

// Do not edit below this line
module.exports = palindromes;
