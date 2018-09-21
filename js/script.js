/** 
 * Initialize constant with nodes list of images 
 * and variable to count slides.
 * Function switches visibility of the slides by toggling 
 * appropriate css class for each slide, in set time interval.
 */

const slides = document.querySelectorAll(".slider__item");
let counter = slides.length - 1;

function slider() {
  slides[counter].classList.toggle("slider__item--hidden");
  counter--;
  if (counter < 0) {
    counter = slides.length - 1;
    for (i = slides.length -1; i >= 0; i--) {
      slides[i].classList.toggle("slider__item--hidden");
    }
  }
}

setInterval(slider, 9000); // adjust time interval  to change slide (in milliseconds)