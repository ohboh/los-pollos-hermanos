import homeVideo from "../../assets/pollosVid.mp4";
import homeImage from "../../assets/pollosLogo3.png";
import clearPage from "../modules/clearPage";

function createVideo(){
    const vid = document.createElement("video");
    vid.src = homeVideo;
    vid.width = 1280;
    vid.height = 720;
    vid.autoplay = true;
    vid.muted = true;
    vid.loop = true;
    return vid;
}

function createImage(){
    const image = document.createElement("img");
    image.src = homeImage;
    image.classList.add("logo");
    image.classList.add("big");
    return image;
}

function loadHomePage(){
    console.log("loaded Home");

    clearPage();
    const content = document.getElementById("content");

    const homeVid = createVideo();
    const homeImage = createImage();

    content.appendChild(homeVid);
    content.appendChild(homeImage);
}

export default loadHomePage;