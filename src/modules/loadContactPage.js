import gus from "../../assets/gus.png";
import clearPage from "./clearPage";

function createString(text, classList){
    const string = document.createElement("div");
    string.innerText = text;
    string.classList.add(classList)
    return string;
}

function createImage(imageElement){
    const image = document.createElement("img");
    image.src = imageElement;
    image.classList.add("fring");
    return image;
}

function loadContactPage(){
    console.log("loaded Contact");

    clearPage();
    const content = document.getElementById("content");

    const title = createString("Contact us", "contact-title");

    const subtitle1 = createString("Phone: ", "contact-subtitle");
    const text1 = createString("(505) 503-4455", "contact-text");
    const subtitle2 = createString("Address: ", "contact-subtitle");
    const text2 = createString("7R9X+46W, Cabuco, Trece Martires, Cavite", "contact-text");

    const fring = createImage(gus);

    content.appendChild(title);

    content.appendChild(subtitle1);
    content.appendChild(text1);
    content.appendChild(subtitle2);
    content.appendChild(text2);

    content.appendChild(fring);
}

export default loadContactPage;