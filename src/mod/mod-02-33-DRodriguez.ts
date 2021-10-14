/**
 * Funcion que devuelve si un numero es primo o no.
 * @param numero Numero para saber si es primo.
 * @returns es primo o no.
 */

function randomEntre(a:number,b:number) {
    let rand = Math.random();
    return Math.trunc(rand*b + a);
}

export default {randomEntre};