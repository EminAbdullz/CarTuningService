//! HEADER
const navigation = document.querySelector(".navigation_mobile");
function show_nav() {
  navigation.classList.toggle("navigation_mobile_shown");
}
const blured = document.querySelector(".wrapper");
function get_blur() {
  blured.classList.toggle("wrapper_blured");
}
////////////////////////////////////////
//! MAIN
// //*SLIDER
///////////
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currenSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".car_show");
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}
//* OUR WORK
const icon_car = document.querySelectorAll(".icon_car").forEach((icon_car) => {
  icon_car.addEventListener("click", flip_card);
  function flip_card() {
    icon_car.classList.toggle("flipCard");
  }
});
//////////////////////////////////////////////////////////////
let slide_index = 1;
show_slides(slide_index);
function plus_Slides(n) {
  show_slides((slide_index += n));
}
function curren_slide(n) {
  show_slides((slide_index = n));
}
function show_slides(n) {
  let i;
  let slides = document.querySelectorAll(".icon_car");
  if (n > slides.length) {
    slide_index = 1;
  } else if (n < 1) {
    slide_index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "flex";
}
//*MORE ABOUT OUR SERVICES
let slide__index = 1;
show__slides(slide__index);
function plus__Slides(n) {
  show__slides((slide__index += n));
}
function curren__slide(n) {
  show__slides((slide__index = n));
}
function show__slides(n) {
  let i;
  let slides_ = document.querySelectorAll(".icon_car_");
  if (n > slides_.length) {
    slide__index = 1;
  } else if (n < 1) {
    slide__index = slides_.length;
  }
  for (i = 0; i < slides_.length; i++) {
    slides_[i].style.display = "none";
  }
  slides_[slide__index - 1].style.display = "flex";
}
///////////////////////
const icon_car_ = document.querySelectorAll(".icon_car_").forEach(icon_car_ =>{
  icon_car_.addEventListener("click" , flipCrad_ =>{
    icon_car_.classList.toggle("flipCard_");
  })
})
