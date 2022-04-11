/*function mensaje(prefijo, formateador) {
  return function (texto) {
    return formateador(prefijo, texto);
  };
}*/

/*const formatoBienvenida = function (prefijo, texto) {
  return `! ${prefijo} ${texto} !`;
};*/
const mensaje = (prefijo, format) => (texto) => format(`${prefijo} ${texto}`);

const formatoBienvenida = (prefijo, texto) => `! ${prefijo} ${texto} !`;

//Arrow function
const formatoDespedida = (prefijo, texto) => `${prefijo} ${texto} ... :('`;

const bienvenida = mensaje("hola", formatoBienvenida);
const despedida = mensaje("Adios", formatoDespedida);

console.log(bienvenida("mundo"));
console.log(despedida("mundo"));
