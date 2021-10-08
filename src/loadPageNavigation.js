function loadMainMenu() {
    let contentDiv = document.getElementById("content");
    let menuDiv = document.createElement("div");
    menuDiv.classList.add("center");
    menuDiv.id = "menu"

    let homeLink = document.createElement("div");
    homeLink.innerText = "Home";
    homeLink.id = "Home";
    homeLink.classList.add("menuItem");

    let menuLink = document.createElement("div");
    menuLink.innerText = "Menu"
    menuLink.id = "Menu";
    menuLink.classList.add("menuItem");

    let contactLink = document.createElement("div");
    contactLink.innerText = "Contact"
    contactLink.id = "Contact";
    contactLink.classList.add("menuItem");

    menuDiv.append(homeLink, menuLink, contactLink);
    contentDiv.appendChild(menuDiv);
}

function loadFooter() {
    let contentDiv = document.getElementById("content");
    let footer = document.createElement("footer");
    footer.classList.add("center");
    footer.classList.add("footer");
    footer.innerText = "4600 150th Ave NE Redmond, WA 98052"

    contentDiv.appendChild(footer);
}

function loadPageNavigation () {
    loadMainMenu();
    loadFooter();
}

export {loadPageNavigation}