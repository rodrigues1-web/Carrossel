// lista de imagems locais
const imagens = ["praia1.jpg", "praia2.jpg", "praia3.jpg", "praia4.jpg"];

// começa na primeira imagem
let indice = 0;

// seleciona elementos HTML
const imagem = document.getElementById("imagem");
const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");

// quando clicar em "proximo"
botaoProximo.addEventListener("click", () => {
  indice++;
if (indice >= imagens.length) {
    indice = 0; // volta a primeira
}
imagem.src = imagens [indice];
})

// quando clicar em "anterior"
botaoAnterior.addEventListener("click", () => {
indice--;
if (indice < 0) {
  indice = imagens.length - 1; // vai para aultima
}
imagem.src = imagens[indice]
})