
const botao = document.getElementById("fogueira");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {
    const acesa = document.body.classList.toggle("fogueira-acesa");
    botao.textContent = acesa ? "Apagar a fogueira" : "Acender a fogueira";
});
