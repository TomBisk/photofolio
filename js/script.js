/** 
 * Initialize constant with nodes list of images 
 * and variable to count slides.
 * Function switches visibility of the slides by toggling 
 * appropriate css class for each slide, in set time interval.
 */

const slides = document.querySelectorAll('.slider__item');
let counter = slides.length;

function slider() {
  counter--;
  if (counter >= 1) {
  slides[counter-1].classList.toggle('hidden');
  slides[counter].classList.toggle('hidden');
  } else {
    counter = slides.length;
    slides[counter-1].classList.toggle('hidden');
    slides[0].classList.toggle('hidden');
  }
 }

setInterval(slider, 6000); // adjust time interval  to change slide (in milliseconds)
