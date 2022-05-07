/* S l i d e   s h o w */

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}



/* D r o p d o w n s */

// Menu drop down ----------------------------------------

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function menuFunction() {
    document.getElementById("myMenu").classList.toggle("show");
}

// Nav drop down ----------------------------------------

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function navFunction() {
    document.getElementById("myNav").classList.toggle("show");
}

window.onclick = function(event) {
    // Close the dropdown menu if the user clicks outside of it
    if (!event.target.matches('.menuBtn')) {
        var menuDropdowns = document.getElementsByClassName("menuContent");
        var i;
        for (i = 0; i < menuDropdowns.length; i++) {
            var openMenuDropdown = menuDropdowns[i];
            if (openMenuDropdown.classList.contains('show')) {
                openMenuDropdown.classList.remove('show');
            }
        }
    }
    // Close the dropdown menu if the user clicks outside of it
    if (!event.target.matches('.navBtn')) {
        var dropdowns = document.getElementsByClassName("navContent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}