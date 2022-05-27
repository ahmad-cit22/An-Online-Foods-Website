
// navbar color changing effect
var myNav = document.getElementById("nav");
window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        myNav.classList.add("scroll");
    } else {
        myNav.classList.remove("scroll");
    }
}

//scroll to top button

window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 600)
})

function scrollToTop() {
    window.scrollTo({
        top: 0,
    })
}

