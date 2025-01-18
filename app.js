let amigosAdicionados = [];

function adicionarAmigo() {
    let inputDoAmigo = document.querySelector('input'); 
    let amigo = inputDoAmigo.value; 
    
    if (amigo === '') {
        alert('Por favor, insira um nome!');
    } else {
        amigosAdicionados.push(amigo);
        inputDoAmigo.value = ''; 
        atualizarListaDeAmigos();
    }

    console.log(amigo);
    console.log(amigosAdicionados);
}

function atualizarListaDeAmigos(){
    let lista = document.getElementById('listaAmigos')

    lista.innerHTML = "";
    
    amigosAdicionados.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
      });
    }

function sortearAmigo(){
    if (amigosAdicionados.length == 0){
        alert('Insira amigos para realizar o sorteio!')
    } else {
        
        let sorteio = Math.floor(Math.random() * amigosAdicionados.length);
        let amigoSorteado = amigosAdicionados[sorteio];
        console.log(amigoSorteado);
        
        mostrarResultado(amigoSorteado);
    }

function mostrarResultado(amigoSorteado){
    
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`

        let lista = document.getElementById('listaAmigos');
        lista.style.display = 'none';
}

}