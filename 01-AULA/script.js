///comentario de uma linha só

/*
     comenta
     várias
     linhas
*/

//console.log = rscreva do portugol
console.log("uma mensaem boa") // tá comentando

// Cria uma janela de alerta na página
// alert("testa ai e vê")

// VAR cria uma variável na tela
var nome = "João pedro"
console.log(nome)


// Cadeia = String 
var texto = "Vasco"
 console.log( typeof(texto) )


// inteiro = number, int
 var numero = 1989
console.log( typeof(numero) )

// real = number, float
 var quebrado = 1.9
console.log( typeof(quebrado) )


// lógico = bool
var VouF = true
console.log( typeof(VouF) )
 
// Valor nulo
var nulo = null
console.log( typeof(nulo) )
 
// Variável sem valor iniciado
var indefinido = undefined
console.log( typeof(indefinido) )

// Operadores aritiméticos
// +,-,*,/,%

var a = 10

var b = 3  

var soma = a + b
console.log(" a soma é :" +soma )

var subtração = a - b
console.log( " a subtração é :" +subtração)

var multiplicação = a * b
console.log( " a multiplicação é :" +multiplicação) 

var divisão = a / b
console.log( " a divisão é :" +divisão) 

var módulo = a % b
console.log( " o módulo é :" +módulo)


// Operadores lógicos
// e, ou, nao
// &&,||, not

var verdade = true
var mentira = false

// Comparação com E
console.log( verdade && mentira )

// Comparação com OU
console.log( verdade || mentira )

// Comparação com negação
console.log( verdade && !mentira )


// Operadores Relacionais
// >,<,>=,<=,==,!=,===,!==

var v1 = 7
var v2 = 15
var v3 ="7"

console.log( v1 > v2);
console.log( v1 < v2);
console.log( v1 >= v2);
console.log( v1 <= v2);
console.log( v1 == v2);
console.log( v1 != v2);

console.log(v1 == v3) //Compara só valor
console.log(v1 === v3) // Compara valor e tipo
console.log(v1 === v3) // Compara valor e tipo

// Interação com o usuário via comando prompt
 var numero = prompt("Digite um número:")
 var numero2 = prompt("Digite outro número:")

 var resultado = Number(numero) + Number(numero2)
 console.log(resultado)

 alert("O resultado é: " + resultado)