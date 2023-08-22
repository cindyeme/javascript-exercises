const removeFromArray = function (arr) {
  /*
  arr.filter((val)=>!valsToRemove.includes(val));
  (arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
  }
  */
  
  const valuesToRemove = Array.from(arguments).slice(1);
  const newArr = [];
  for (const item of arr) {
    if (!valuesToRemove.includes(item)) {
      newArr.push(item);
    }
  }

  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
