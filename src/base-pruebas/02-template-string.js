
export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}


const nombre = 'Elihu';

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );