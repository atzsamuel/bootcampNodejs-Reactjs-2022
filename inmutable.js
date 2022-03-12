// Programacion funcional  COPIA DE OBJETOS

// Object.assign(destino, origen1, origen2, ...) para modificar un objeto
//const juan2 = Object.assign({}, juan, { apellido: "Gomez" });
/*
const juan = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 20,
  direccion: {
    ciudad: "Guatemala",
    municipio: "Guatemala",
  },
};

const juan2 = {
  ...juan,
  apellido: "Gomez",
  telefono: 343434,
  direccion:{
    ...juan.direccion,
    municipio: "Santa Catarina Pinuala",
    aldea: "Aldea 1",
  }
};
juan2.direccion.municipio = "Santa Catarina Pinula";

console.log("juan: ", juan);
console.log("juan2: ", juan2);*/

const numeros = [1, 2, 3];
const numeros2 = [0, ...numeros, 4];

const index = numeros.indexOf(2);
const numeros3 = [...numeros.slice(0, index), 1.5, ...numeros.slice(index)];

//numeros2.push(5);
const numeros4 = numeros.filter((x) => x != 2);

const numero5 = numeros.map((x) => (x == 2 ? 100 : x));

console.log("numeros: ", numeros);
console.log("numeros2: ", numeros2);
console.log("numeros3: ", numeros3);
console.log("numeros4: ", numeros4);
console.log("numero5: ", numero5);
