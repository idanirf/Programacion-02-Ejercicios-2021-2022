import read from 'readline-sync';
import chalk from 'chalk';
import esPrimo from './mod/mod-02-32-DRodriguez'

/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 13/10/2021
 * Descripción: Programa para saber si un numero es primo..
 */

numero= read.questionInt
//Funcion del programa
function numero() {
  for (let i = 1; i <= 100; i++) {
    if (esPrimo(i)) {
      console.log("Es un numero primo: " +i);
    } else {
      console.log("No es un numero primo: " +i);
    }
  }
}
