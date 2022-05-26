const btn = document.querySelector(".style-btn");
const head = document.querySelector("head");

<<<<<<< HEAD
btn.addEventListener("click", styleIt);
btn.addEventListener("touchend", styleIt)
=======
btn.addEventListener("touchend", styleIt);
>>>>>>> 8ded20a514ea47b455f0f8c74dc2f98be5b2c33d

function styleIt() {
    head.innerHTML += `<link rel="stylesheet" href="css/style.min.css" />`
    btn.style.display = "none"
}
