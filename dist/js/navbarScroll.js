document.addEventListener('scroll', function() {

    const hero = document.querySelector("#hero");
    const currentPos = window.scrollY;

    const nav = document.querySelector("nav");

    if (currentPos >= hero.offsetHeight) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

});