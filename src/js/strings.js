$(document).ready(function() {
  // ============ Main nav-bar =============
  $('.toggler-icon').on('click', function() {
    $(this).toggleClass('toggler-icon_close');
    $('.nav-bar').slideToggle('0.5s');
  });

  // ======= Return the number (count) of vowels in the given string.

  let vowelsCount = 0;

  function getVowelsCount(str) {
    if (str.match(/[aeiou]/gi) == null) {
      vowelsCount = 0
    } else {
        vowelsCount = str.match(/[aeiou]/gi).length;
      }

    return vowelsCount;
  };

  $('#vowelsCountInput').on('input', function() {
    getVowelsCount($(this).val());
    $('#vowelsCountResult').html(vowelsCount);
  });

  // ======= Find isograms

  function isIsogram(str) {
    return !/(\w).*\1/i.test(str);
  };

  $('#isogramsInput').on('input', function() {
    let isogram = isIsogram($(this).val());
    if (isogram == true) {
      $('#isogramsResult').html('true');
    } else if(isogram == false) {
      $('#isogramsResult').html('false');;
    };
    console.log(isogram);
  });
});
