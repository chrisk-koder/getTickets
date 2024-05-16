// Get the burger menu button
const burgerButton = document.querySelector("#burgerMenu");

import { openMenu } from "./menu/open.js";

import { closeMenu } from "./menu/close.js"

function menuManager() {

    const menuState = document.querySelector("#menu");

    if (menuState.classList.contains("hidden")) {
        openMenu();
    } else {
        closeMenu();
    }

}

// Register the event listeners for click (both buttons)
burgerButton.addEventListener('click', menuManager);