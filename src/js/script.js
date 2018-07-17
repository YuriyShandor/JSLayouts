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

  // ================= Simple gallery carousel ===============

  let imagesGalleryArr = $('.img-gallery__item');
  let activeImage = 0;
  let slideInterval = setInterval(nextSlide, 5000);

  function nextSlide(){
    imagesGalleryArr[activeImage].style.opacity = '0';
    activeImage++;

    if(activeImage >= imagesGalleryArr.length) {
      activeImage = 0;
    };

    imagesGalleryArr[activeImage].style.opacity = '1';
  }

  $('.img-gallery__btn_next').click(function() {
    imagesGalleryArr[activeImage].style.opacity = '0';
    activeImage++;

    if(activeImage >= imagesGalleryArr.length) {
      activeImage = 0;
    };

    imagesGalleryArr[activeImage].style.opacity = '1';

    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  });

  $('.img-gallery__btn_prev').click(function() {
    imagesGalleryArr[activeImage].style.opacity = '0';
    activeImage--;

    if(activeImage < 0) {
      activeImage = imagesGalleryArr.length - 1;
    };

    imagesGalleryArr[activeImage].style.opacity = '1';

    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  });


  // ================= Random elements ===============

  function randomElem(min, max) {
    return Math.floor(Math.random() * (max - min + 1))
  };

  let randomElementsArr = $('.random-elem-block__item');

  setInterval(function() {
    let rand = randomElem(0, randomElementsArr.length - 1);
    randomElementsArr[rand].classList.toggle('active');
  }, 500)
});
