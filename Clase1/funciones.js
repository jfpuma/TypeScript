// function saludar(nombre:string) {
//     console.log("Hola "+ nombre)
//     alert("Hola "+ nombre)
// }
// saludar("Jean Franco")
// function sumar(n1:number):number {
//     n1 += 3
//     return n1
// }
// alert("La suma es igual a: "+ sumar(3))
function promediar(n1, n2, n3, solo_sumar) {
    if (solo_sumar)
        return n1 + n2 + n3;
    return (n1 + n2 + n3) / 3;
}
alert("El promedio es igual: " + promediar(1, 2, 3));
alert("El promedio es igual: " + promediar(1, 2, 3, true));
