// Passo 1 - Dar um jeito de pegar o elemento HTML dos botões
const botoescarrossel = document.querySelectorAll(".botao");
const videos = document.querySelectorAll(".video");
const informacoes = document.querySelectorAll(".informacoes");

botoescarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // Passo 3 - Desmarcar o botão selecionado anteriormente
        const botaoselecionado = document.querySelector(".botao.selecionado");
        if (botaoselecionado) {
            botaoselecionado.classList.remove("selecionado");
        }

        // Passo 4 - Marcar o botão clicado como se estivesse selecionado
        botao.classList.add("selecionado");

        // Passo 5 - Esconder o vídeo anteriormente selecionado
        const videoAtivo = document.querySelector(".video.ativa");
        if (videoAtivo) {
            videoAtivo.classList.remove("ativa");
            videoAtivo.pause(); // Pause o vídeo anterior
        }

        // Passo 6 - Fazer aparecer o vídeo correspondente ao botão clicado
        videos[indice].classList.add("ativa");
        videos[indice].play(); // Reproduza o vídeo correspondente

        // Passo 7 - Esconder a informação do dragão anteriormente selecionado
        const informacaoAtiva = document.querySelector(".informacoes.ativa");
        if (informacaoAtiva) {
            informacaoAtiva.classList.remove("ativa");
        }

        // Passo 8 - Mostrar a informação do dragão referente ao botão clicado
        informacoes[indice].classList.add("ativa");
    });
});
