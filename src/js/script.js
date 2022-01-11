// Selecionando elemento ul do HTML
const ul = document.querySelector(".containerListaProdutos ul")

const somaProdutos = (produtosArray) => {
  const valorTotal = document.getElementById("precoTotal")
  valorTotal.innerText = produtosArray.reduce((total, produto) => total + produto.preco, 0).toFixed(2)}

const montarListaProdutos = (listaProdutos) => {
  ul.innerHTML = ""
  listaProdutos.forEach((produto) => {
    const li = document.createElement("li")
    const img = document.createElement("img")
    const h3 = document.createElement("h3")
    const p = document.createElement("p")
    const span = document.createElement("span")

    // Adicionando dados do produto aos elementos
    img.src = produto.img
    img.alt = produto.nome
    h3.innerText = produto.nome
    p.innerText = "R$" + produto.preco.toFixed(2)
    span.innerText = produto.secao

    // Adicionando o elementos para o li
    li.appendChild(img)
    li.appendChild(h3)
    li.appendChild(p)
    li.appendChild(span)

    // Adicionando li ao HTML
    ul.appendChild(li)
  })
}

const filtrarHortifruti = () => {
  const listaHortifruti = produtos.filter((produto) => {
    return produto.secao === "Hortifruti"
  })
  somaProdutos(listaHortifruti)
  montarListaProdutos(listaHortifruti)
}

const botaoMostrarHortifruti = document.querySelector(
  ".estiloGeralBotoes--filtrarHortifruti"
)
botaoMostrarHortifruti.addEventListener("click", filtrarHortifruti)

const filtrarTodos = () => {
  const listaTodos = produtos.filter((produto) => {
    return produto
  })
  somaProdutos(listaTodos)
  montarListaProdutos(listaTodos)
}

const botaoMostrarTodos = document.querySelector(
  ".estiloGeralBotoes--mostrarTodos"
)
botaoMostrarTodos.addEventListener("click", filtrarTodos)

const filtrarBusca = () => {
  let campoBusca = document.querySelector(".campoBuscaPorNome").value
  const listaBusca = produtos.filter((produto) => {
    return produto.nome.toLowerCase() === campoBusca.toLowerCase()
  })
  somaProdutos(listaBusca)
  montarListaProdutos(listaBusca)
}

const botaoBusca = document.querySelector(
  ".estiloGeralBotoes--botaoBuscaPorNome"
)
botaoBusca.addEventListener("click", filtrarBusca)
