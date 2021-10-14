export function randomEntre(a:number,b:number) {
    let rand = Math.random();
    return Math.round(rand*b + a);
}