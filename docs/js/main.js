const btn = document.querySelector(".style-btn");
const head = document.querySelector("head");

btn.addEventListener("touchend", styleIt);
btn.addEventListener("click", styleIt);

function styleIt() {
    head.innerHTML += `<link rel="stylesheet" href="css/style.min.css" />`
    btn.style.display = "none"
}
