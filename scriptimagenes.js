// Obtener elementos
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeModal = document.getElementsByClassName("close")[0];
const galleryItems = document.querySelectorAll(".gallery-item");

// Abre la imagen en el modal al hacer clic
galleryItems.forEach(item => {
    item.addEventListener("click", function () {
        modal.style.display = "block";
        const img = item.querySelector("img");
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    });
});

// Cerrar el modal
closeModal.onclick = function () {
    modal.style.display = "none";
}

// Cerrar modal si se hace clic fuera de la imagen
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
