import smallLogo from "../../assets/pollosLogo4.png"

function headerLoad() {
    const body = document.querySelector("body");
  
    const header = document.createElement("header");
    const logo = document.createElement("img");
    logo.src = smallLogo;
    logo.classList.add("logo", "small");
    header.innerHTML = `
    <nav>
        <div id="Home" class="header selected">Home</div>
        <div id="Menu" class="header">Menu</div>
        <div id="Contact" class="header">Contact</div>
    </nav>`;

    header.prepend(logo);
    body.prepend(header);
    return body;
}

export default headerLoad;