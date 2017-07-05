var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function vstop(n) {
    n.pause();
    n.currentTime = 0;
}
function showDivs(n) {
    var i;
    var xx = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > xx.length) {slideIndex = 1}
    if (n < 1) {slideIndex = xx.length}
    for (i = 0; i < xx.length; i++) {
        xx[i].style.display = "none";
        vstop(xx[i]);
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-red", "");
    }
    xx[slideIndex -1].style.display = "block";
    xx[slideIndex -1].play();
    xx[slideIndex -1].onended = function() {
        plusDivs(1);
    };
    dots[slideIndex -1].className += " w3-red";
}