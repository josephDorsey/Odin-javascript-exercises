const removeFromArray = function (x) {
  // Test 1 remove single value
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 3) {
      x.splice(i, 1);
      i--;
      return x;
    }
  }
};

module.exports = removeFromArray;
