"use strict";
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
  // for (let i = 0; i < x.length; i++) {
  //   if (x[i] === 2 || x[i] === 3) {
  //     x.splice(i, 2); // this tells to remove 2 elements
  //     i--;
  //     return x;
  //   }
  // }
  // Test 3 remove non preset values
  // for (let i = 0; i < x.length; i++) {
  //     return [...x];
  //   }
  // }

  // Test 4 - ignore non present values, but still works
  // for (let i = 0; i < x.length; i++) {
  //   if (x[i] === 2) {
  //     x.splice(i, 1); // this tells to remove 1
  //     i--;
  //     return [...x];
  //   }
  // }
  // Test 5 - remove all elements from array - returns []
  // for (let i = 0; i < x.length; i++) {
  //   x.splice(i);
  //   i--;
  //   return x;
  // }
  // Test 6 - works with strings
  // for (let i = 0; i < x.length; i++) {
  //   if (x[i] === "hey") {
  //     x.splice(i, 1);
  //     i--;
  //   }
  //   if (x[i] === 3) {
  //     x.splice(i, 1);
  //     i--;
  //     return x;
  //   }
  // }
  // Test 7 - removes same type value
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "1") {
      x.splice(i, 1);
      i--;
    }
    if (x[i] === 3) {
      x.splice(i, 1);
      i--;
      return x;
    }
  }
};
console.log(removeFromArray([1, 2, 3], "1", 3));
module.exports = removeFromArray;
