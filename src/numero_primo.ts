export function esPrimo(numero: number) {
    //primero de todo, controlamos que no sea un 1 o un 0
    //para ser primo, tiene si o si que ser mayor que 1
    let es_primo = numero > 1;
    //aqui todavia no sabemos si es primo, pero si si puede serlo (valor actual de es_primo)
    if (es_primo) {
        //console.log("El número es mayor que 1, vamos a mirar si tiene más de dos divisores");
        //si puede ser un numero primo (pq es mayor a 1)
        //vamos a comprobar que no tenga divisores que no sean 1 y sí mismo (numero)
        //lo iniciamos como falso porque no sabemos si lo encontraremos
        let otro_divisor = false;
        let i = 2;
        while (!otro_divisor && i < numero) {
            let residuo = numero%i;
            //console.log(`El número ${i} es menor a ${numero} y su residuo con ${numero} es ${residuo}`);
            otro_divisor = residuo == 0;
            if (otro_divisor) {
                // console.log("Es un divisor de "+numero+". Paramos de mirar");
            }
            i++;
        }
        es_primo = !otro_divisor;
    } else {
        //console.log("El número es 1 o menor, y por tanto no es primo. Devolveremos falso directamente");
    }
    return es_primo;
}