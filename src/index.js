import './style.css'
import {loadMainPageContent} from './mainPageLoad.js';
import {loadPageNavigation} from './loadPageNavigation.js'
import {loadMenuPageContent} from './menuPageLoad.js';
import {loadContactPageContent} from './contactPageLoad.js'

loadPageNavigation();
loadMainPageContent();

let contentDiv = document.getElementById("content");
let menuItems = document.querySelectorAll(".menuItem");
menuItems.forEach((element) => element.addEventListener("click", switchPage));

function switchPage (event){
    let pressedMenuItemId = event.target.id;
    contentDiv.innerHTML = '';
    loadPageNavigation();
    let menuItems = document.querySelectorAll(".menuItem");  
    menuItems.forEach((element) => element.addEventListener("click", switchPage));

    switch(pressedMenuItemId) {
        case "Home":
            loadMainPageContent();
            break;
        case "Contact":
            loadContactPageContent();
            break;
        case "Menu":
            loadMenuPageContent();
            break;
        default:
            console.log("Could not find menu item. Loading main page instead.")
            loadMainPageContent();
      }
}