// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import aux from './mod/mod-02-31-DRodriguez'

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 14/10/2021
 * Descripción: 
 */
 
let esPrimo: number
esPrimo = read.questionInt("Dime el numero del que quieres saber si es primo: ");

if (esPrimo) {
  console.log("El número es primo");
}
else {
  console.log("El numero no es primo");
}
