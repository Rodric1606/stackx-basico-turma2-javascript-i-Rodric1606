// -------------------------------------

//Função que calcula a soma de 2 números
  let a = 1337                      // O primeiro número.
  let b = 3301                      // O segundo número.
  let result = soma(a, b)       // A soma dos dois numeros
 
function soma(a, b) {
  return  a + b;
}

 // Função que calcula a multiplicação de 2 números
  a = 3                             // O primeiro número.
  b = 11                            // O segundo número.
  result = multiplicacao(a,b) //A multiplicação dos dois numeros
 
function multiplicacao(a, b) {
  return a * b;
}

//Função que calcula a divisão de 2 números
  a = 10                          // O primeiro número.
  b = 2                           // O segundo número.
  result = divisao(a,b)    // A divisão dos dois numeros

function divisao(a, b) {
  return a / b;
}

//Função que calcula a subtração de 2 números
  a = 3301                        // O primeiro número.
  b = 1337                        // O segundo número.
  result = subtracao(a,b)  // A subtração dos dois numeros

function subtracao(a, b) {
  return a - b;
}

//Função que resto da divisão de 2 números
a = 15                            // O primeiro número.
b = 4                             // O segundo número.
result = modulo(a,b)  // O resto da divisão dos dois numeros

function modulo(a, b) {
   if(b === 0){
      return 0;
   } else{
     return a % b;
   }
}

//Função que calcula o maior número entre 2
a = 13                            // O primeiro número.
b = 33                            // O segundo número.
result = max(a,b)

function max(a, b) {
   if(a > b){
     return a;
   }else{
     return b;
   }
}
// -------------------------------------
//Função que concatena 2 strings utilizando template strings
  a = 'Hello'                      // A primeira string
  b = 'World'                      // A segunda string
  result = strConcat(a,b)

function strConcat(a, b) {
    return `${a} ${b}`;
}

// --------------------------------------
//Função que implementa controle de fluxo

 let numero = 15                   // O número em questão
 result = retornaNumero(numero)
 numero = 10
 result = retornaNumero(numero)
 numero = 5 
 result = retornaNumero(numero)

/*"Maior que 10" quando o número é maior que 10
  "Igual a 10" quando o número é igual a 10
  "Menor que 10" quando o número é menor que 10 */

function retornaNumero(numero) {
   if(numero == 10){
     return `Igual a 10`;
   }else if( numero > 10){
      return `Maior que 10`;
   }else{
      return `Menor que 10`;
   }
}
// --------------------------------------
//Função que valida se o número em questão é positivo
let num = 5                                                 // Número em questão
result = ehPositivo(num)                                    // Retorna true para números positivos
num = 0
result = ehPositivo(num) 
num = -5
result = ehPositivo(num) 

function ehPositivo(num) {
  if(num >= 0){
    return true
  }else{
    return false
  }
}

module.exports = 
{ 
 soma,
  multiplicacao,
  divisao,
  subtracao,
  modulo,
  max,
  strConcat,
  retornaNumero,
  ehPositivo
}; 
