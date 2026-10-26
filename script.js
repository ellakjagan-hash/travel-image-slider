let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach(function(slide) {
        slide.style.display = "none";
    });

    slides[index].style.display = "block";
}

function changeSlide(direction) {
    currentSlide = currentSlide + direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

showSlide(currentSlide);
function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}
setInterval(function() {
    changeSlide(1);
}, 3000);