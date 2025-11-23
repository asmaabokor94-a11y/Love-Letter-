function openPage(pageName) {
    let pages = document.querySelectorAll(".page");
    pages.forEach(p => p.style.display = "none");

    document.getElementById(pageName).style.display = "block";
}
