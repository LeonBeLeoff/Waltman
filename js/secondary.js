/* D r o p d o w n s */

// Menu drop down ----------------------------------------

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function menuFunction() {
    document.getElementById("myMenu").classList.toggle("show");
    document.getElementById("mainHeaderBtn").classList.toggle("mainHeaderBtn");
}

// Nav drop down ----------------------------------------

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function navFunction() {
    document.getElementById("myNav").classList.toggle("show");
    document.getElementById("altHeaderBtn").classList.toggle("altHeaderBtn");
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
    // Reverts the appearance of the button if the user clicks outside of it
    if (!event.target.matches('.mainHeaderBtn')) {
        var mainHeaderBtns = document.getElementsByClassName("mainHeaderBtn");
        var i;
        for (i = 0; i < mainHeaderBtns.length; i++) {
            var openMainHeaderBtn = mainHeaderBtns[i];
            if (openMainHeaderBtn.classList.contains('mainHeaderBtn')) {
                openMainHeaderBtn.classList.remove('mainHeaderBtn');
            }
        }
    }
    // Reverts the appearance of the button if the user clicks outside of it
    if (!event.target.matches('.altHeaderBtn')) {
        var altHeaderBtns = document.getElementsByClassName("altHeaderBtn");
        var i;
        for (i = 0; i < altHeaderBtns.length; i++) {
            var openAltHeaderBtn = altHeaderBtns[i];
            if (openAltHeaderBtn.classList.contains('altHeaderBtn')) {
                openAltHeaderBtn.classList.remove('altHeaderBtn');
            }
        }
    }
}