const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        esconderCartaoPokedev();

        const idPokedeveSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

        desativarPokedevSelecionadoNaListagem();

        ativarPokedeveSelecionadoNaListagem(idPokedeveSelecionado);
    })
})

function ativarPokedeveSelecionadoNaListagem(idPokedeveSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedeveSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevSelecionadoNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedeveSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedeveSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedeveSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
