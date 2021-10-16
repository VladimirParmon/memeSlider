//===================Carousel=====================//

var carousel = document.querySelector('.carouselContainer')
var bullet = document.querySelectorAll('.bulletHole')
var cControls = document.querySelector('.carouselControls')
var firstSlide = carousel.querySelectorAll('.slide')[0]

var aSIndex = 0; //activeSlideIndex
var description = document.querySelector('.descriptionContainer')
var firstQuote = description.querySelector('div').offsetWidth

bullet[aSIndex].querySelector('div').style.backgroundColor = '#D2B183'

function changeSlide () {
  var slideWidth = firstSlide.offsetWidth;
  carousel.style.transform = `translateX(-${aSIndex * slideWidth}px)`
  description.style.transform = `translateX(-${aSIndex * firstQuote}px)`
  bullet[aSIndex].querySelector('div').style.backgroundColor = '#D2B183'
}

bullet.forEach(el => el.addEventListener('click', event => {
  carousel.classList.add('shifting')
  var bulletID = event.target.getAttribute('id');
  if (!(event.target === bullet[aSIndex])) {
    bullet[aSIndex].querySelector('div').style.backgroundColor = '#ffffff'
  switch(bulletID) {
    case 'bullet0':
      aSIndex = 0;
      break
    case 'bullet1':
      aSIndex = 1;
      break
    case 'bullet2':
      aSIndex = 2;
      break
    case 'bullet3':
      aSIndex = 3;
      break
    case 'bullet4':
      aSIndex = 4;
      break
  }

  changeSlide();
}
}));

carousel.addEventListener('transitionend', () => {
  carousel.classList.remove('shifting')
})

window.addEventListener("resize", () => {
  var slideWidth = firstSlide.offsetWidth;
  carousel.style.transform = `translateX(-${aSIndex * slideWidth}px)`
});


