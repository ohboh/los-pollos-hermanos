function clearPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    content.className = ""
    return content;
}

export default clearPage;