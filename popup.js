const logo = document.getElementById("logo");
const popup = document.getElementById("popup-container");
const stay = document.getElementById("stay");

logo.addEventListener("click", function () {
    popup.style.display = "flex";
    document.body.classList.add("no-scroll"); // Désactiver le scroll
});

popup.addEventListener("click", function (event) {
    if (event.target === popup) {
        popup.style.display = "none";
        document.body.classList.remove("no-scroll"); // Réactiver le scroll
    }
});

stay.addEventListener("click", function () {
    popup.style.display = "none";
    document.body.classList.remove("no-scroll"); // Réactiver le scroll
});
