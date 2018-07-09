$(document).ready(function() {
  // ================= Main nav-bar =====================
  $('.toggler-icon').on('click', function() {
    $(this).toggleClass('toggler-icon_close');
    $('.nav-bar').slideToggle('0.5s');
  });

  // ================= Sum of items values ===============

  $('.sumvalitems-block__item').click(function() {
    $(this).toggleClass('active');
    culcSumValItems();
  });

  let sumValItemsArr = $('.sumvalitems-block__item');

  function culcSumValItems() {
    let sumValItemsVal = 0;

    for(let i =0; i < sumValItemsArr.length; i++) {
      if(sumValItemsArr[i].classList.contains('active')) {
        sumValItemsVal += parseInt(sumValItemsArr[i].getAttribute('data-sumvalitems'));
      };
    };

    $('.sumvalitems-block__value').html(sumValItemsVal);
  };


});
