const slide = document.querySelectorAll('.slide'),
    dot = document.querySelectorAll('.slide__dot');

let counter = 1;
slidestart(counter);

let timer = setInterval(autoSlide, 8000);

function autoSlide() {
    counter += 1;
    slidestart(counter);
}

function plusSlides(n) {
    counter += n;
    slidestart(counter);
    resetTimer();
}

function currentSlide(n) {
    counter = n;
    slidestart(counter);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}

function slidestart(n) {
    let i;
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
        dot[i].classList.remove("active");
    }
    if(n > slide.length) {
        counter = 1;
    }
    if (n<1) {
        counter = slide.length;
    }
    slide[counter -1].style.display = "flex";
    dot[counter - 1].classList.add("active");
}