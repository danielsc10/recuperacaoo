document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Carregar a imagem da nave
    const naveImg = new Image();
    naveImg.src = "nave.png"; 
    // Definir o fator de escala para redimensionar a imagem da nave
    const scale = 0.25; // Ajuste conforme necessário

    // Definir as dimensões da nave redimensionada
    const naveWidth = naveImg.width * scale;
    const naveHeight = naveImg.height * scale;

    // Posicionar a nave na parte central inferior do canvas
    let naveX = (canvas.width - naveWidth) / 2;
    const naveY = canvas.height - naveHeight;

    // Desenhar a nave na posição inicial
    function drawNave() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(naveImg, naveX, naveY, naveWidth, naveHeight);
    }

    // Event listener para detectar as teclas A e D pressionadas
    document.addEventListener("keydown", function(event) {
        if (event.key === "a") {
            // Movimentar a nave para a esquerda
            naveX -= 10;
            drawNave();
        } else if (event.key === "d") {
            // Movimentar a nave para a direita
            naveX += 10;
            drawNave();
        }
    });

    // Carregar a imagem da nave antes de desenhar
    naveImg.onload = drawNave;
});
