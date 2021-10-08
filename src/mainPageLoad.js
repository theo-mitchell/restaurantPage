import luigi1 from './img/luigi1.jpg';
import luigi2 from './img/luigi2.jpg';
import pizza from './img/pizza.jpg';

function loadMainPageContent() {
    let contentDiv = document.getElementById("content");

    let headerDiv = document.createElement("div");
    headerDiv.classList.add("center");

    let headerText = document.createElement("h1");
    headerText.innerText = "Lugi's Pasta"

    headerDiv.appendChild(headerText);
    

    let galleryDiv = document.createElement("div");
    galleryDiv.classList.add("gallery");

    let figure1 = document.createElement("figure");
    figure1.classList.add("gallery__item");
    let image1 = document.createElement("img");
    image1.classList.add("gallery__img");
    image1.setAttribute('src', luigi1);
    image1.setAttribute('alt','Lugi1');
    figure1.appendChild(image1);

    let figure2 = document.createElement("figure");
    figure2.classList.add("gallery__item");
    let image2 = document.createElement("img");
    image2.classList.add("gallery__img");
    image2.setAttribute('src',pizza);
    image2.setAttribute('alt','pizzer');
    figure2.appendChild(image2);

    let figure3 = document.createElement("figure");
    figure3.classList.add("gallery__item");
    let image3 = document.createElement("img");
    image3.classList.add("gallery__img");
    image3.setAttribute('src', luigi2);
    image3.setAttribute('alt','Lugi2');
    figure3.appendChild(image3);

    galleryDiv.append(figure1, figure2, figure3);

    contentDiv.append(headerDiv, galleryDiv);
}

export {loadMainPageContent}; 