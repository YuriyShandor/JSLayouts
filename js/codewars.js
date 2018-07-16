'use strict';

// ======= Money, Money, Money. Calculate years for deposite to desires sum

function calculateYears(principal, interest, tax, desired) {
  var y = 0;

  while (principal < desired) {
    principal += principal * interest - principal * interest * tax;
    y++;
  }

  return y;
}

//==========================================================

// ======= You're a square! Is number is square

function isSquare(n) {
  if (Math.sqrt(n) % 1 == 0) {
    return true;
  } else {
    return false;
  }
}

//==========================================================

// ======= Highest and Lowest. Get highest and lowest number in the string

function highAndLow(numbers) {
  var arr = numbers.split(' ');
  var max = arr[0];
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) > max) {
      max = arr[i];
    }
    if (parseInt(arr[i]) < min) {
      min = arr[i];
    }
  }
  return 'Max: ' + max + ', min: ' + min;
}

console.log(highAndLow('1 2 3 4 5 2305 -786'));