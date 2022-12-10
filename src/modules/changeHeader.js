function changeHeaderClass(selected) {
    const headerButtons = document.querySelectorAll(".header");
    for (var i = 0; i < headerButtons.length; i++) {
        headerButtons[i].classList.remove("selected");
        selected.classList.add("selected");
    }
}

export default changeHeaderClass;