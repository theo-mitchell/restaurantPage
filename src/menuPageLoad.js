function loadMenuPageContent () {
    let contentDiv = document.getElementById("content");

    let menuText1 = document.createElement("h2");
    menuText1.classList.add("center");
    menuText1.innerHTML = "We offer two delightful menu options"

    let menuText2 = document.createElement("h2");
    menuText2.classList.add("center");
    menuText2.innerHTML = "1. Order pasta:"

    let figure1 = document.createElement("figure");
    figure1.classList.add("center");
    let image1 = document.createElement("img");
    image1.classList.add("gallery__img");
    image1.setAttribute('src','../src/img/menuitem1.jpg');
    image1.setAttribute('alt',"da pasta");
    image1.style.height = "35%"
    image1.style.width = "35%"
    figure1.appendChild(image1);

    let menuText3 = document.createElement("h2");
    menuText3.classList.add("center");
    menuText3.innerHTML = "2. Leave:"

    let figure2 = document.createElement("figure");
    figure2.classList.add("center");
    let image2 = document.createElement("img");
    image2.classList.add("gallery__img");
    image2.setAttribute('src','../src/img/menuitem2.jpg');
    image2.setAttribute('alt',"da pasta");
    image2.style.height = "40%"
    image2.style.width = "40%"
    figure2.appendChild(image2);

    contentDiv.append(menuText1, menuText2, figure1, menuText3, figure2);

}

export {loadMenuPageContent}