function moveButton() {
    // Pega o botão "No"
    const noButton = document.getElementById("noButton");

    // Define as dimensões da tela
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Gera posições aleatórias para o botão dentro da tela
    const randomX = Math.floor(Math.random() * (screenWidth - noButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (screenHeight - noButton.offsetHeight));

    // Move o botão para a posição aleatória
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

function nextPage() {
    // Redireciona para a nova página
    window.location.href = "te_busc_as_oito.html";
}
