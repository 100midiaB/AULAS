function quemMeChamou(individuo){
     console.log(individuo);
    console.log("Class:", individuo.class);
    console.log("ID:", individuo.id);
    console.log("Name:", individuo.name);
    console.log("Valor:", individuo.name);
    
}

//ElementoQueChamou = parte do html que invocou a função
function trocaTexto(elementoQueChamou){
    // Mostra o texto do html que chamou a função
    // console.log(elementoQueChamou);
     
    //Cria uma variavel pra guardar quem ele achar com aquele id
    let textoAntigo = document.getElementById
    ("textoPraTrocar")

    // Usa o innerhtml pra substituir o que tava dentro do textoAntigo, pro valor que está na caixinha do elemento que chamou a função
    textoAntigo.innerHTML = elementoQueChamou.value
    }

    function troca(elementoQueChamou){
        let antigo = document.getElementById("textoOutro")
        antigo.innerHTML = elementoQueChamou.value
    }

    function corVermelho(elemento){
        elemento.style.color = "red"
        elemento.style.fontsize = "60px"
    }

    function corAzul(elemento){
        elemento.style.color = "blue"
        elemento.style.fontsize = "20px"
    }