
// All themes in a little list
const themes = [
    "Light", 
    "Dark"
];

// Set the selected theme, by default light (0)
var nextTheme = themes[1];

// Switch Theme Function
function switchTheme() {

    // Get the element by ID
    const themeStyle = document.getElementById('themeStyle');

    // Check which theme is currently selected and set correct theme
    if (nextTheme === themes[0]) { // Light Theme
        themeStyle.setAttribute('href', './dist/css/themes/light.css');
        nextTheme = themes[1];
    } else if (nextTheme === themes[1]) { // Dark Theme
        themeStyle.setAttribute('href', './dist/css/themes/dark.css');
        nextTheme = themes[0];
    }
}