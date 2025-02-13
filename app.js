let amigos = [];
let amigosSorteados = [];

function textoNaTela(tag, texto) {
    let campo = document.querySelector("h2");
    campo.innerHTML = texto;
}

function resultado(texto) {
    let campo = document.getElementById("resultado");
    campo.innerHTML = texto;
}

function adicionarAmigo() {   
    let nome = document.querySelector("input").value;
    if (nome == '') {
        alert("Digite um nome válido.");
    } else {
        amigos.push(nome);
        limparCampo();
        textoNaTela("h2", "Digite o nome dos seus amigos");
        resultado("");
        lista();
    } 
}

function lista() {
    let campo = document.getElementById("listaAmigos");
    let nomes = document.createElement("li");
    nomes.textContent = amigos[amigos.length - 1];
    campo.append(nomes);
}

function limparCampo() {
    let nome = document.querySelector("input");
    nome.value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        resultado("Digite o nome de um amigo antes de sortear!");
    } else if (amigos.length < 3) {
        resultado("Não é possível sortear menos de 3 amigos!");
    } else {
        let sorteado = Math.floor(Math.random() * amigos.length++); // Sorteia um índice válido
        resultado(`Sorteado: ${amigos[sorteado]}`);
        textoNaTela("h2", "Um amigo foi sorteado!");
        removerAmigoSorteado(sorteado); // Chama a função para remover o amigo sorteado
        lista(); // Atualiza a exibição da lista de amigos
    }
}

function removerAmigoSorteado(indice) {
    let amigoSorteado = amigos[indice]; // Armazena o amigo sorteado em uma variável
    amigos.splice(indice, 1); // Remove o amigo da lista pelo índice
    amigosSorteados.push(amigoSorteado); // Adiciona o amigo sorteado ao array de amigos sorteados

    // Atualiza a lista exibida na tela
    const campoLista = document.getElementById("listaAmigos");
    campoLista.innerHTML = ""; // Limpa a lista atual
    amigos.forEach(amigo => { // Itera sobre os amigos restantes
        let nomes = document.createElement("li"); // Cria um novo elemento <li>
        nomes.textContent = amigo; // Define o nome do amigo
        campoLista.append(nomes); // Adiciona o amigo à lista exibida
    });
}