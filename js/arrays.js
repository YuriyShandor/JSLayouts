"use strict";

$(document).ready(function () {
  // ============ Main nav-bar =============
  // $('.toggler-icon').on('click', function() {
  //   $(this).toggleClass('toggler-icon_close');
  //   $('.nav-bar').slideToggle('0.5s');
  // });

  // =========== Arrays Methods ===============
  var simpleNumbers = [5, 69, -87, -2, 59, 157, 7, -1, 0, -2];

  // forEac()
  simpleNumbers.forEach(function (item) {
    //console.log(item);
  });

  // filter()
  var negativeNumbers = simpleNumbers.filter(function (item) {
    return item < 0;
  });

  // map()
  var simpleNumbers2 = simpleNumbers.map(function (item) {
    if (item % 2 == 0) {
      return item * 2;
    } else {
      return item * 3;
    }
  });

  // every()
  var allPositive = simpleNumbers.every(function (item) {
    return item >= 0;
  });

  // some()
  var isNegative = simpleNumbers.some(function (item) {
    return item < 0;
  });

  // reduce()
  var numbersSum = simpleNumbers.reduce(function (total, item) {
    return total + item;
  });
  console.log(numbersSum);
});