const botaoTrailer = document.querySelector(".botao-trailer");
const linkDoVideo = "https://www.youtube.com/embed/Cb4WV4aXBpk";
const video = document.getElementById("video");
const modal = document.querySelector(".modal");

botaoTrailer.addEventListener("click", () => {

    modal.classList.add("aberto");
    video.setAttribute ("src", linkDoVideo);
});


const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener ("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
})
