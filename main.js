/*Requisitos del programa:
1. leer 3 números por prompt y guardarlos en sus propias variables
2. Analizar cual es : el mayor, menor y el del centro
3. imprimir los números ordenados de mayor a menor y viceversa
4. identificar si los numeros son iguales e imprimir un mensaje que indique 
    cuales son iguales

Recuerda que: convertir los valores a Int y tratar errores
*/ 
import promptSync from 'prompt-sync';
const prompt = promptSync();

let continuar = false
//En caso de no dar números, se repite el programa hasta que se logre la condición
while (!continuar){
//recibe 3 números (reales), los separa por comas y elimina espacios
let numerosUsuario = prompt("Ingresa 3 números (pueden reales) separados por coma: ")
let numeros = numerosUsuario.split(",").map(num => Number(num.trim()));

//Verficar que sean 3 números válidos y arrojar error si no es así
if(numeros.length === 3 && numeros.every(n => !isNaN(n))){ //verfica que cada  elementos sea un número real
    console.log ("Números ingresados: ",numeros);
    let numeroMenor = Math.min(...numeros)
    let numeroMayor = Math.max(...numeros) //convertir el array en datos sueltos para operar
    let centro = Math.floor(numeros.length/2)
    console.log(`El número mayor: ${numeroMayor} El número menor es: ${numeroMenor} y el número del medio ${centro}`)
    break;
}else{
    console.log("Error: debes de ingresar exactamente 3 números válidos separados por coma");
}
}






