'use strict';

$(document).ready(function () {
  // ============ Main nav-bar =============
  $('.toggler-icon').on('click', function () {
    $(this).toggleClass('toggler-icon_close');
    $('.nav-bar').slideToggle('0.5s');
  });

  // ============ Sorting elements by tab =============

  // Sorting by classes

  var colorTabArr = ['all', 'red', 'black', 'green', 'blue', 'grey'];

  $('.tab-sorting__tab_all').addClass('active');

  colorTabArr.forEach(function (item) {
    $('.tab-sorting__tab_' + item).click(function () {
      $('.tab-sorting__tab').removeClass('active');
      $(this).addClass('active');
      $('.tab-sorting__element').hide();
      $('.tab-sorting__element_' + item).show();
    });
  });
  $('.tab-sorting__tab_all').click(function () {
    $('.tab-sorting__tab').removeClass('active');
    $(this).addClass('active');
    $('.tab-sorting__element').show();
  });
});