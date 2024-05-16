// Closes the menu
function closeMenu() {

    // Get the menu
    const menuList = document.querySelector("#menu");
    // Add hidden (hides the menu)
    menuList.classList.add("hidden");
    console.log("Menu closed");

}

export {closeMenu};