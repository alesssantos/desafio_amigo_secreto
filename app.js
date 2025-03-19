// Criando um array para armazenar a lista de amigos
let amigos = [];

// Criando a função para adicionar amigos
function adicionarAmigo() {
    let inserirNome = document.querySelector('input');
    if (inserirNome.value === "") {
        alert('Por favor, insira um nome!');
    } else {
        amigos.push(inserirNome.value);
    };
    inserirNome.value = "";
    atualizarListaAmigos();
};

// Percorrendo o array amigos
function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Criando a função para sortear o amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Não há mais amigos para sortear');
        return;
    }
    let numeroDoAmigo = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroDoAmigo];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `${amigoSorteado}`;

    amigos.splice(numeroDoAmigo, 1);
    atualizarListaAmigos()
}