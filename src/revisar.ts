/**
 * Nombre: Daniel Rodríguez Fernández
 * GitHub: idanirf
 * Fecha: 12/10/2021
 * Descripción: Plnatilla en ejecucion
 */

// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import { esPrimo } from './numero_primo';
import { randomEntre } from './randoms';

//Preguntar - Como poner intervalos
// Zona de declaraciones:

function ejercicio_32() {
  for (let i = 1; i <= 100; i++) {
    if (esPrimo(i)) {
      console.log(`${i} es un número primo`);
    } else {
      console.log(`${i} no es un número primo`);
    }
  }
}

function ejercicio_33() {
  let numero_primitiva = "";
  for (let i = 0; i <= 5; i++) {
    numero_primitiva = `${numero_primitiva}${randomEntre(1,49).toString().padStart(2, "0")} `;
  }
  console.log(numero_primitiva);
}

function main() {
  // ejercicio_32();
  ejercicio_33();
}

main();

