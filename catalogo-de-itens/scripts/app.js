import BancoDeDados from "./module/gravar-itens.js";
import TabelaRenderizadora from "./module/ler-itens.js"

const tabela = document.querySelector("#lista-de-itens")
const banco = new BancoDeDados()
const renderizarTabela = () => {
    const dados = banco.carregar();
    renderizador.renderizar(dados);
  };
  
  // Instancia o renderizador com o callback de deletar
  const renderizador = new TabelaRenderizadora(
    tabela,
    null, 
    (id) => {
      banco.remover(id);
      renderizarTabela(); 
    }
  );
  
renderizarTabela();
