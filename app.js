let amigosAdicionados = [];

// Função para adicionar um amigo à lista de amigos
function adicionarAmigo() {
    // Obtém o valor do input de amigo
    let inputDoAmigo = document.querySelector('input');
    let amigo = inputDoAmigo.value.trim(); // Remove espaços extras

    // Verifica se o nome não está vazio
    if (amigo === '') {
        alert('Por favor, insira um nome!');
    } else {
        // Adiciona o amigo à lista
        amigosAdicionados.push(amigo);
        inputDoAmigo.value = ''; // Limpa o campo de input

        // Atualiza a lista de amigos na tela
        atualizarListaDeAmigos();
    }

    // Logs para depuração (podem ser removidos em produção)
    console.log(amigo);
    console.log(amigosAdicionados);
}

// Função para atualizar a lista de amigos visível na tela
function atualizarListaDeAmigos() {
    // Obtém o elemento da lista
    let lista = document.getElementById('listaAmigos');
    
    // Limpa a lista antes de adicionar os amigos atualizados
    lista.innerHTML = "";

    // Adiciona cada amigo como um item <li> na lista
    amigosAdicionados.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verifica se há amigos na lista antes de sortear
    if (amigosAdicionados.length === 0) {
        alert('Insira amigos para realizar o sorteio!');
        return; // Não faz nada se não houver amigos
    } 

    // Sorteia um amigo aleatoriamente
    let sorteio = Math.floor(Math.random() * amigosAdicionados.length);
    let amigoSorteado = amigosAdicionados[sorteio];

    // Logs para depuração
    console.log(amigoSorteado);

    // Exibe o resultado do sorteio
    mostrarResultado(amigoSorteado);
}

// Função para mostrar o resultado do sorteio e esconder a lista de amigos
function mostrarResultado(amigoSorteado) {
    // Exibe o resultado na área de resultados
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;

    // Oculta a lista de amigos para mostrar apenas o resultado
    let lista = document.getElementById('listaAmigos');
    lista.style.display = 'none';
}