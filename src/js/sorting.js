$(document).ready(function() {
  // ============ Main nav-bar =============
  $('.toggler-icon').on('click', function() {
    $(this).toggleClass('toggler-icon_close');
    $('.nav-bar').slideToggle('0.5s');
  });

  // ============ Sorting elements by tab =============

  // Sorting by classes

  let colorSortTabArr = ['all', 'red', 'black', 'green', 'blue', 'grey'];

  $('.tab-sorting__tab_all').addClass('active');

  colorSortTabArr.forEach(function(item) {
    $(`.tab-sorting__tab_${item}`).click(function(){
      $(this).closest(".tab-sorting__block_classes").find('.tab-sorting__tab').removeClass('active');
      $(this).addClass('active');
      $(this).closest(".tab-sorting__block_classes").find('.tab-sorting__element').hide();
      $(this).closest(".tab-sorting__block_classes").find(`.tab-sorting__element_${item}`).show();
    });
  });

  $('.tab-sorting__tab_all').click(function(){
    $(this).closest(".tab-sorting__block_classes").find('.tab-sorting__tab').removeClass('active');
    $(this).addClass('active');
    $(this).closest(".tab-sorting__block_classes").find('.tab-sorting__element').show();
  });

  // Sorting by data attribute
  $('.tab-sorting__tab[data-sorting-tab-title="all"]').addClass('active');

  $('.tab-sorting__tab').click(function() {
    $(this).closest(".tab-sorting__block_data").find('.tab-sorting__tab').removeClass('active');
    $(this).addClass('active');
    let colorSortTabId = $(this).data("sorting-tab-title");
    $(this).closest(".tab-sorting__block_data").find(".tab-sorting__element").hide();
    $(".tab-sorting__element[data-sorting-tab-element='"+ colorSortTabId +"']").show();
  });

  $('.tab-sorting__tab[data-sorting-tab-title="all"]').click(function(){
    $(this).closest(".tab-sorting__block_data").find('.tab-sorting__tab').removeClass('active');
    $(this).addClass('active');
    $(this).closest(".tab-sorting__block_data").find('.tab-sorting__element').show();
  });

});
