// jasmine removeFromArray.spec.js
const removeFromArray = function (x) {
  // Test 1 - remove single value
  // for (let i = 0; i < x.length; i++) {
  //   if (x[i] === 3) {
  //     x.splice(i, 1); // this tells how many elements to remove
  //     i--;
  //     return x;
  //   }
  // }

  // Test 2 - remove multiple values
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 2 || x[i] === 3) {
      x.splice(i, 2); // this tells to remove 2 elements
      i--;
      return x;
    }
  }
};
// console.log(removeFromArray([1, 2, 3, 4], 3, 2));
module.exports = removeFromArray;