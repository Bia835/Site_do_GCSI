// MENU MOBILE
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(a => {
    a.addEventListener("click", () => navMenu.classList.remove("show"));
});

// MODAL DOS PRATOS
const modal = document.getElementById("modal");
const modalTitulo = document.getElementById("modalTitulo");
const modalDescricao = document.getElementById("modalDescricao");
const fecharModal = document.getElementById("fecharModal");

function abrirModal(titulo, desc) {
    modalTitulo.textContent = titulo;
    modalDescricao.innerHTML = desc;
    modal.style.display = "flex";
}

fecharModal.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
    if(e.target === modal) modal.style.display = "none";
};
