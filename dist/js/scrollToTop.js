
const scrollToTop = document.querySelector("#scrollToTop");

document.addEventListener('scroll', function() {

    const hero = document.querySelector("#hero");
    const currentPos = window.scrollY;

    if (currentPos >= hero.offsetHeight) {
        scrollToTop.classList.add("show");
    } else {
        scrollToTop.classList.remove("show");
    }

});

scrollToTop.addEventListener("click", function() {

    window.scrollTo(0, 0);

});