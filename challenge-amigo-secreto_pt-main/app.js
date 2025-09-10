let amigos = [];

function adicionarAmigo() {
  const nomeAmigo = document.getElementById("amigo").value;
  const lista = document.getElementById("listaAmigos");

  if (nomeAmigo.trim() === "") {
    alert("Por favor, digite um nome válido.");
    return;
  }

  if (/[0-9]/.test(nomeAmigo)) {
    alert("O nome não pode conter números.");
    return;
  }

  if (amigos.includes(nomeAmigo)) {
    alert("Este nome já foi adicionado.");
    return;
  }

  amigos.push(nomeAmigo);
  lista.innerHTML = amigos.join(", ");

  document.getElementById("amigo").value = "";
}

function sortearAmigo() {
  const listaResultado = document.getElementById("resultado");
  const botaoSortear = document.querySelector(".button-draw");

  if (botaoSortear.textContent.includes("Novo sorteio")) {
    reiniciar();
    return;
  }

  if (amigos.length < 2) {
    alert("Adicione pelo menos 2 amigos para o sorteio.");
    return;
  }

  document.getElementById("amigo").style.display = "none";
  document.querySelector(".button-add").style.display = "none";
  document.querySelector(".section-title").textContent =
    "O amigo sorteado foi:";
  document.getElementById("listaAmigos").style.display = "none";
  const imagemSorteio = document.getElementById("imagemSorteio");

  imagemSorteio.src = "assets/cat-guess.png";

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const nomeSorteado = amigos[indiceSorteado];

  listaResultado.innerHTML = `<li>${nomeSorteado}</li>`;

  botaoSortear.innerHTML = `<img src="assets/play_circle_outline.png" />Novo sorteio`;
}

function reiniciar() {
  amigos = [];
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("amigo").style.display = "block";
  document.querySelector(".button-add").style.display = "block";
  document.querySelector(".section-title").textContent =
    "Digite o nome dos seus amigos";
  document.getElementById("listaAmigos").style.display = "block";

  const imagemSorteio = document.getElementById("imagemSorteio");
  imagemSorteio.src = "assets/cat-gift.png";

  const botaoSortear = document.querySelector(".button-draw");
  botaoSortear.innerHTML = `<img src="assets/play_circle_outline.png" alt="Ícone para sortear" /> Sortear amigo`;
}
