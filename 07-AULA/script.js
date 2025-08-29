var produto1 = {
    nome : "Coca cola",
    categoria : "bebida",
    tamanhos : ["200ml","lata","600ml","2L"],
    quantia : 7,
    descricao : function(){
        // o produto X é da categoria X
          console.log("O produto",this.nome ,"é da categoria",this.categoria)
    },
      verTamanhos : opcoes
}

var produto2 = {
    nome : "bobigudis",
    categoria : "brinquedo",
    tamanhos : ["pequeno","medio","grande"],
    quantia : 1,
    descricao : function(){
        // o produto X é da categoria X
          console.log("O produto",this.nome ,"é da categoria",this.categoria)
    },
       verTamanhos : opcoes
}

////Mostrar descrição com o uso do this internamente
// produto1.descricao()
// produto2.descricao()

function opcoes(){
    let tmh = ""
    // console.log("No início", tmh)
    for(index in this.tamanhos){
    // tmh += this.tamanhos[index] + ","
       tmh += this.tamanhos[index] + ","
    //    console.log(tmh)
    }
    //  console.log("No fim:", tmh)
    console.log("As opçõesm de tamanho são:",tmh)
}

// produto1.verTamanhos()
produto2.verTamanhos()