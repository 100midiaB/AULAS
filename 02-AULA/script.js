//interação com o usúario via prompt
// var nome = prompt("Digite um noome:")

// alert("Seu nome é:" + nome)

//CONDICIONAIS

// SE, SENÃO SE, SENÃO
// IF, IF ELSE, ELSE

var estaVivo = 7

if(estaVivo == true){
  console.log("Parabéns, você está vivo")
}
else if (estaVivo == false){
console.log("Ifelizmente, está morto !!!");
}
else{
    console.log("Você não tá nada, virou sei lá")
}

//ESCOLHA / CASO
//SWITCH / CASE

var corCamisa= "Amarela"

switch(corCamisa){
    case "Azul":
        console.log("Você ganhou um voucher")
        break
        case "Amarela":
        console.log("Você ganhou um body splash")
        break
        case "Vermelha":
        console.log("Você ganhou um brinde")
        break
        default:
            console.log("Cor de camisa inválida")
            break
    }

//     // var nota = prompt ("Digite sua nota : ")
//     if(nota >6){
//     console.log("Você passou")
//     } 
   
//    else if(nota >= 5 && nota <= 6) {
//      console.log("Você está de recuperação")
//    }
   
//    else{
//      console.log("Você reprovou")
//    }


   var idade = prompt("Digite sua idade : ")
   var idade2 = prompt("Digite sua idade : ")
   var ingresso1, ingresso2
   if(idade1 <= 17){
   ingresso1=15
    console.log("15 Reais para você seu banana")
   }
   else if(idade1 >= 18 && idade1<=59){
    ingresso1 = 30
    console.log("Agora paga 30 seu boi")
   }
   else{
    ingresso1
    console.log(" Agora é 20tinho pae")
   }
   if(idade2 <= 17) {
   igresso2=15
    console.log("15 Reais para você seu banana")
   }
   else if(idade2 >= 18 && idade2 <=59){
    ingresso2 = 30
    console.log("Agora paga 30 seu boi")
   }
   else{
    ingresso2
    console.log(" Agora é 20tinho pae")
   }

   var valorFinal = ingresso1 + ingresso2

   console.log("Opreço final foi :" + valorFinal)

   alert("Opreço final foi: " + valorFinal)
