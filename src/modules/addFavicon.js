import icon from "../../assets/pollosIcon.ico"

function setFavicon(){
    let headTitle = document.querySelector("head");
    setFavicon = document.createElement("link");
    setFavicon.setAttribute("rel","icon");
    setFavicon.setAttribute("href", icon);
    headTitle.appendChild(setFavicon);
}

export default setFavicon;