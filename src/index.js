import setFavicon from "./modules/addFavicon";
import headerLoad from "./modules/headerLoad";
import loadHomePage from "./modules/loadHomePage"
import loadMenuPage from "./modules/loadMenuPage";
import loadContactPage from "./modules/loadContactPage";
import changeHeaderClass from "./modules/changeHeader";

setFavicon();
headerLoad();
loadHomePage();

window.loadHomePage = loadHomePage;
window.loadMenuPage = loadMenuPage;
window.loadContactPage = loadContactPage;

const headerButtons = document.querySelectorAll(".header");

headerButtons.forEach(button => {
    button.addEventListener("click", function clickEvent() {
        changeHeaderClass(button);
        eval ("load" + button.id + "Page();")
    });
});