const reverseString = function (x) {
  let spreadString = [...x];
  return spreadString.reverse().join("");
};

module.exports = reverseString;
