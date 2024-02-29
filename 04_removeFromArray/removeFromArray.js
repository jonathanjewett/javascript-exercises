const removeFromArray = function(array, ...toBeRemoved) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!toBeRemoved.includes(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
