import BancoDeDados from "./module/gravar-itens.js";

const cadastrarBtn = document.querySelector("#cadastrarBtn")

const banco = new BancoDeDados()

cadastrarBtn.addEventListener("click", (event) => {
    event.preventDefault()
    const nome = document.querySelector("#nome")
    const categoria = document.querySelector("#categoria")
    const status = document.querySelector("#status")

    banco.adicionar(nome.value, categoria.value, status.value)

    nome.value = ""
    categoria.value = ""
    status.value = ""

    window.location.href = "../index.html"
})

