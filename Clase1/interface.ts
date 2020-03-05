interface IAlumno{
    nombre:string,
    apellido:string,
    edad:number,
    cedula:string,
}

let alumno1:IAlumno={
    nombre:"Jean Franco",
    apellido:"Puma",
    cedula:"V-24158415",
    edad:26
}

console.log(alumno1);

function mostrar(alumno:IAlumno){
    console.log(alumno.nombre)
    console.log(alumno.apellido)
    console.log(alumno.cedula)
    console.log(alumno.edad)
}
mostrar(alumno1);