console.log("Vamo q vamo")

//LAÇOS DE REPETIÇÃO
// PARA = FOR 
for(var i = 0; i < 5; i++){
     console.log("Ainda estou aqui")
     console.log("Ainda estou aka")
}

console.log("Acabou de repetir");

// ENQUANTO = WHILE

var contagem = 0
while(contagem < 10){
    console.log("Estou repetindo infinitamente")
    contagem++
}

// var numero = prompt("Digite um numero")
// for(var i = 0; i <= numero;  i++){
//      console.log("Contagem",i)
// }

// var senha = "0"

// while(senha != "100"){
//     var senha = prompt("Digite a senha, Dica: maior que 99 e menor que 101")
// }

// console.log("Você entrou !!!");


//FUNÇOES

// function RaulBiogode(){
//     var nome = prompt("Nome: ")
//     console.log("Enfuuu, ",nome)
// }

// //CHAMA A FUNÇÃO
// RaulBiogode()


//FUNÇÃO COM PARAMETROS
// function calcularIdade(idade){
//       alert("Sua idade é: ", idade)
// }

// calcularIdade(18)
// calcularIdade(100)


// var valor =  Number(prompt("Digite um numero"))
// var valor2 =  Number(prompt("Digite um numero"))
// function Maior(valor,valor2){
// }

// if(valor > valor2){
//     console.log("o primeiro valor é maior")
// }

// else if( valor < valor2){
//     console.log("o segundo valor é maior")
// }

// else{
//     console.log("os valores são iguais")
// }


//FUNÇÕES COM RETORNO

function soma(valor1, valor2){
     let resultado = valor1 + valor2
     
     return resultado
}

  var valorSomado = soma(388.5,388.5)
  
console.log("A soma deu : ", valorSomado)