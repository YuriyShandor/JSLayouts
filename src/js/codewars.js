
// ======= Money, Money, Money. Calculate years for deposite to desires sum

function calculateYears(principal, interest, tax, desired) {
  let y = 0;

  while (principal < desired) {
    principal += principal * interest - (principal * interest * tax)
    y++;
  }

  return y;
}

//==========================================================

// ======= You're a square! Is number is square

function isSquare(n) {
  if(Math.sqrt(n) % 1 == 0) {
    return true;
  } else {
    return false;
  }
}

//==========================================================

// ======= Highest and Lowest. Get highest and lowest number in the string

function highAndLow(numbers){
  let arr = numbers.split(' ');
  let max = arr[0];
  let min = arr[0];
  for(let i=0; i<arr.length; i++){
    if(parseInt(arr[i]) > max){
      max = arr[i];
    }
    if(parseInt(arr[i]) < min){
      min = arr[i]
    }
  }
  return `Max: ${max}, min: ${min}`;
}

console.log(highAndLow('1 2 3 4 5 2305 -786'));
