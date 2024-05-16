// Opens the menu
function openMenu() {

    // Get the menu
    const menuList = document.querySelector("#menu");
    // Remove hidden (shows the menu)
    menuList.classList.remove("hidden");
    console.log("Menu opened");

}

export {openMenu};