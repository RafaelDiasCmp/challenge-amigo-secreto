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