$(document).ready(function() {
  // ============ Main nav-bar =============
  // $('.toggler-icon').on('click', function() {
  //   $(this).toggleClass('toggler-icon_close');
  //   $('.nav-bar').slideToggle('0.5s');
  // });

  // =========== Arrays Methods ===============
  let simpleNumbers = [5, 69, -87, -2, 59, 157, 7, -1, 0, -2];

  // forEac()
  simpleNumbers.forEach((item) => {
    //console.log(item);
  })

  // filter()
  let negativeNumbers = simpleNumbers.filter((item) => {
    return item < 0;
  });

  // map()
  let simpleNumbers2 = simpleNumbers.map((item) => {
    if(item % 2 == 0) {
      return item * 2;
    } else {
      return item * 3;
    }
  });

  // every()
  let allPositive = simpleNumbers.every((item) => {
    return item >= 0;
  })

  // some()
  let isNegative = simpleNumbers.some((item => {
    return item < 0;
  }))

  // reduce()
  let numbersSum = simpleNumbers.reduce((total, item) => {
    return total + item;
  })
  console.log(numbersSum);
});
