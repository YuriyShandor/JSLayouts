'use strict';

$(document).ready(function () {
  // ================= Main nav-bar =====================
  $('.toggler-icon').on('click', function () {
    $(this).toggleClass('toggler-icon_close');
    $('.nav-bar').slideToggle('0.5s');
  });

  // ================= Sum of items values ===============

  $('.sumvalitems-block__item').click(function () {
    $(this).toggleClass('active');
    culcSumValItems();
  });

  var sumValItemsArr = $('.sumvalitems-block__item');

  function culcSumValItems() {
    var sumValItemsVal = 0;

    for (var i = 0; i < sumValItemsArr.length; i++) {
      if (sumValItemsArr[i].classList.contains('active')) {
        sumValItemsVal += parseInt(sumValItemsArr[i].getAttribute('data-sumvalitems'));
      };
    };

    $('.sumvalitems-block__value').html(sumValItemsVal);
  };
});