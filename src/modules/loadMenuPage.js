import menu1 from "../../assets/pollosMenu1.png";
import menu2 from "../../assets/pollosMenu2.png";
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
    image.classList.add("menu");
    return image;
}

function loadMenuPage(){
    console.log("loaded Menu");

    clearPage();
    const content = document.getElementById("content");

    const title = createString("Menu", "menu-title");

    const menuImage1 = createImage(menu1);
    const menuImage2 = createImage(menu2);

    const subtitle = createString("For non-food item orders, please call for Mr. Fring himself.", "menu-subtitle");

    content.appendChild(title);

    content.appendChild(menuImage1);
    content.appendChild(menuImage2);
    
    content.appendChild(subtitle);
}

export default loadMenuPage;