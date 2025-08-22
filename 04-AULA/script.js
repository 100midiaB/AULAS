//Vetor = Array
// var alunos = ["Cristiano", "Neymar", "Virgínia", "djokovic"]

// // Mostra todos os elementos do array
// console.log(alunos)

// // Mostra um valor de uma posição especifica do array
// console.log(alunos[2])

// //troca um valor
// alunos[3] = "Tiringa"

// //Array com valores de vários tipos
// var aleatorio = ["Roda gigante", 8,"Froagem", 1.5, 3, false,"Dougras"]

// //Loop prra mostrar todos os valors do arrray
// for(var i = 0; i < 7; i++){
//           console.log(aleatorio[i])
// }

// for(var i = 0; i < aleatorio.length; i++){
//           console.log(aleatorio[i])
// }

// //Array de times
// var times = ["Real Madri", "Liverpool", "Botafogo PB", "Milan"]

// // index = numero da caixa no array
// for(var index in times){
//       console.log(index) // mostrar o numero da caixinha que descobriu
//       console.log(times[index]) // mostrar o valor que tem dentro da caixinha
// } 

// var nome = prompt("Digite 7 nomes")
// for(var i = 0; i < nome.length; i++){
//     console.log(nome[i])
// }

// manipulando arrays
var frutas = ["Maçã", "uva", "pera"]
console.log(frutas);

// push - adiciona um valor no fim do array
frutas.push("Mamão")
console.log(frutas)

// pop - tira o ultimo valor e retorna ele
var frutaTirada = frutas.pop()
console.log(frutaTirada);

//shit - tira o primeiro valor e retorna ele
var primeiraFruta = frutas.shift()
console.log(primeiraFruta)

// unshift - Adiciona um valor ou mais no inicio do array
var novaFruta = "Tomate"
frutas.unshift(novaFruta)
console.log(frutas)