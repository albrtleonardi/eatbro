const sliders = document.querySelectorAll(".slider");
let currentIndex = 0;

function showNextReview() {
  sliders[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % sliders.length;
  sliders[currentIndex].classList.add("active");
}

setInterval(showNextReview, 6000); 
