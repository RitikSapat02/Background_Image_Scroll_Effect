const bgImage = document.getElementById("bg-class");

window.addEventListener("scroll", updateImage);

function updateImage() {
  bgImage.style.opacity = 1 - window.scrollY / 900;
  bgImage.style.backgroundSize = 150 - window.scrollY / 12 + "%";
}
