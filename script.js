function alternarModo() {
    document.body.classList.toggle('dark-mode');
}

document.addEventListener("DOMContentLoaded", () => {
    contadores = document.querySelectorAll(".contador");

    contadores.forEach(contador => {
        contador.innerText = "0";

        const atualizarContador = () => {
            const alvo = +contador.getAttribute("data-alvo");
            const contagem = +contador.innerText.replace(/[^\d.-]/g, '');
            const incremento = alvo / 2000;
            const simbolo = contador.getAttribute("data-simbolo") || "% ";

            if (contagem < alvo) {
                contador.innerText = Math.ceil(contagem + incremento) + simbolo;
                setTimeout(atualizarContador, 20);
            } else {
                contador.innerText = alvo + simbolo;
            }
        };
        atualizarContador();
    });
});