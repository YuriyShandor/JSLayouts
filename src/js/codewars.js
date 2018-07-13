
//Return the number (count) of vowels in the given string.

function getCount(str) {
  var vowelsCount = 0;

  if (str.match(/[aeiou]/gi) == null) {
    vowelsCount = 0
  } else {
      vowelsCount = str.match(/[aeiou]/gi).length;
    }

  return vowelsCount;
}

//==========================================================
