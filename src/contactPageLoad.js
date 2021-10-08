function loadContactPageContent () {
    let contentDiv = document.getElementById("content");

    let figure = document.createElement("figure");
    figure.classList.add("center");
    let image = document.createElement("img");
    image.classList.add("gallery__img");
    image.setAttribute('src','../src/img/contact_page_pic.jpg');
    image.setAttribute('alt',"Don't talk to me or my son ever again");
    image.style.height = "40%"
    image.style.width = "40%"
    figure.appendChild(image);
    
    let contactInfoText1 = document.createElement("h2");
    contactInfoText1.classList.add("center");
    contactInfoText1.innerHTML = "Don't contact us"

    let contactInfoText2 = document.createElement("h2");
    contactInfoText2.classList.add("center");
    contactInfoText2.innerHTML = "We don't wanna talk"

    let contactInfoText3 = document.createElement("h2");
    contactInfoText3.classList.add("center");
    contactInfoText3.innerHTML = "Just buy pasta and don't ask questions"

    contentDiv.append(figure,contactInfoText1, contactInfoText2, contactInfoText3);
}

export {loadContactPageContent}