// variaveis globais
const quadrados = document.querySelectorAll(".jogo");
const reiniciar = document.getElementById("reiniciar");
const zerar = document.getElementById("zerar");
const modalContainer = document.getElementById("modal-container");
const modalTitle = document.getElementById("title");
const modalResultado = document.getElementById("resultado");
const fecharModal = document.getElementById("button-sair");
let vencedor;
let titleModal;
let placarX = 0;
let placarO = 0;
let jogador = "O";
tabuleiro = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]; // matriz verificando o jogo

// adicionar um ouvidor de evento a todos os quadrados
for (quadrado of quadrados) {
  quadrado.addEventListener("click", (event) => {
    marcar(event.target); // function que marca os quadrados
  });
}

// function que marca os quadrados e alterna o jogador
function marcar(quadrado) {
  if (quadrado.innerHTML === "") {
    // marcar no tabuleiro
    quadrado.innerHTML = jogador;

    $(quadrado).hide().fadeIn();
  }

  // adicionar na array do tabuleiro
  let linha = parseInt(quadrado.id[quadrado.id.length - 1]) - 1;
  let coluna = parseInt(quadrado.id[quadrado.id.length - 2]) - 1;
  tabuleiro[linha][coluna] = jogador;

  verificarVencedor();

  // alternar o jogador
  if (jogador == "O") {
    jogador = "X";
  } else {
    jogador = "O";
  }
}

// mostrar resultado em um modal
function mostrarModal() {
  modalTitle.innerHTML = titleModal; 
  modalResultado.innerHTML = `${vencedor} VENCEU!`;
  modalContainer.style.display = "block";
  $(modalContainer).hide().fadeIn();
}

// esconder modal
function esconderModal() {
  modalContainer.style.display = "none";
  resetarJogo();
}

fecharModal.addEventListener("click", esconderModal);

// resetar jogo

function resetarJogo() {
  for (quadrado of quadrados) {
    quadrado.innerHTML = "";
  }
  tabuleiro = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
}

//zerar placar
function zerarPlacar() {
  resetarJogo();
  placarX = 0;
  placarO = 0;
  placar2.innerHTML = placarO;
  placar1.innerHTML = placarX;
}

// verificar vencedor
function verificarVencedor() {
  // verificar linhas
  for (let i = 0; i < 3; i++) {
    if (
      tabuleiro[i][0] != "" &&
      tabuleiro[i][0] == tabuleiro[i][1] &&
      tabuleiro[i][1] == tabuleiro[i][2]
    ) {
      if (tabuleiro[i][0] == "O") {
        placarO++;
        document.getElementById("placar2").innerHTML = placarO;
        vencedor = "O";
        titleModal = "Vencedor!"
        mostrarModal();
      } else {
        placarX++;
        document.getElementById("placar1").innerHTML = placarX;
        vencedor = "X";
        titleModal = "Vencedor!"
        mostrarModal();
      }
      resetarJogo();
      return;
    }
  }

  // verificar colunas
  for (let i = 0; i < 3; i++) {
    if (
      tabuleiro[0][i] != "" &&
      tabuleiro[0][i] == tabuleiro[1][i] &&
      tabuleiro[1][i] == tabuleiro[2][i]
    ) {
      if (tabuleiro[0][i] == "O") {
        placarO++;
        document.getElementById("placar2").innerHTML = placarO;
        vencedor = "O";
        titleModal = "Vencedor!"
        mostrarModal();
      } else {
        placarX++;
        document.getElementById("placar1").innerHTML = placarX;
        vencedor = "X";
        titleModal = "Vencedor!"
        mostrarModal();
      }
      resetarJogo();
      return;
    }
  }

  // verificar diagonal principal
  if (
    tabuleiro[0][0] != "" &&
    tabuleiro[0][0] == tabuleiro[1][1] &&
    tabuleiro[1][1] == tabuleiro[2][2]
  ) {
    if (tabuleiro[0][0] == "O") {
      placarO++;
      document.getElementById("placar2").innerHTML = placarO;
      vencedor = "O";
      titleModal = "Vencedor!"
      mostrarModal();
    } else {
      placarX++;
      document.getElementById("placar1").innerHTML = placarX;
      vencedor = "X";
      titleModal = "Vencedor!"
      mostrarModal();
    }
    resetarJogo();
    return;
  }

  // verificar diagonal secundária
  if (
    tabuleiro[0][2] != "" &&
    tabuleiro[0][2] == tabuleiro[1][1] &&
    tabuleiro[1][1] == tabuleiro[2][0]
  ) {
    if (tabuleiro[0][2] == "O") {
      placarO++;
      document.getElementById("placar2").innerHTML = placarO;
      vencedor = "O";
      titleModal = "Vencedor!"
      mostrarModal();
    } else {
      placarX++;
      document.getElementById("placar1").innerHTML = placarX;
      vencedor = "X";
      titleModal = "Vencedor!"
      mostrarModal();
    }
  }
  //verificar empate
  let empate = true;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tabuleiro[i][j] == "") {
        empate = false;
        break;
      }
    }
    if (!empate) {
      break;
    }
  }
  if (empate) {
    console.log("Empate!");
    vencedor = "Nenhum jogador";
    titleModal = "Empate!"
    document.getElementById("title").innerHTML = "Empate!";
    mostrarModal();
    resetarJogo();
    return;
  }
}

reiniciar.addEventListener("click", resetarJogo);
zerar.addEventListener("click", zerarPlacar);
