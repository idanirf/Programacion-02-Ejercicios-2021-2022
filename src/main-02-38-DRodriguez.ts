// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';
import aux from './mod/mod-02-31-DRodriguez'

function ejercicio23() {

    //Variables
    let factorial = 1;
    let number: number;

    //Iniciamos el programa
    number = read.questionInt("Dime el numero")
    for (let i = 1; i <= number; i++)
        factorial = factorial * i;
    console.log("El resultado del factorial es:" + factorial);
}

function ejercicio29() {

    // Zona de declaraciones:
    let notas = 0;
    let aprobados = 0;
    let suspensos = 0;
    let alumnos = 0;
    let notasTotales = 0;

    //Desarrollo del programa;    
    let salir = false;
    for (let i = 0; !salir; i++, alumnos++) {
        notas = read.questionFloat("Dime la nota: ");
        if (notas != -1) {
            notasTotales = notasTotales + notas;
        }
        if (notas >= 0 && notas <= 4.99) {
            console.log("La nota introducida se contabiliza como suspensa")
            suspensos++
        } else if (notas >= 5 && notas <= 5.99) {
            console.log("La nota es aprobada con un suficiente")
            aprobados++
        } else if (notas >= 6 && notas <= 6.99) {
            console.log("La nota introducida es un bien")
            aprobados++
        } else if (notas >= 7 && notas <= 8) {
            console.log("La nota es un notable")
            aprobados++
        } else if (notas >= 9 && notas <= 10) {
            console.log("La nota es un sobresaliente")
            aprobados++
        } else if (notas < 0) {
            salir = true;
        } 

    }
    notasTotales = notasTotales / (alumnos - 1);
    console.log("Alumnos aprobados: " + aprobados);
    console.log("Alumnos suspensos: " + suspensos);
    console.log("La nota media de la clase es de : " + notasTotales);
}

function ejercicio31() {
    let numero: number
    numero = read.questionInt("Dime el numero del que quieres saber si es primo: ");
    
    if (aux.esPrimo(numero)==false) {
    
     console.log("El número no es primo");
     
    }
    else {
      (aux.esPrimo(numero)==true)
    
      console.log("El numero es primo");
    }
}

function escogeOpcion() {
    let texto = `
    Escoge una opción:
    - ejercicio 23 (23)
    - ejercicio 29 (29)
    - ejercicio 31 (31)
    - salir (-1)
    `;
    let response = read.questionInt(texto);
    return response;
}

function main() {
    let salir: boolean = false;
    do {
        let opcion = escogeOpcion();
        switch (opcion) {
            case 23: 
                ejercicio23(); break;
            case 29: 
                ejercicio29(); break;
            case 31: 
                ejercicio31(); break;
            case -1: 
                salir = true; break;
            default: 
                console.log("Por favor, escoge una opción válida...");
        }
    } while (!salir)
    console.log("Saliendo del programa... Gracias :3");
}








