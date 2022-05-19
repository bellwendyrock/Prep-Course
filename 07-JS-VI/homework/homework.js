// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  return cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  return cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  var sumaReduce = numeros.reduce(function(acumulador,elemento){
    return acumulador+elemento;
  },0);

  cb(sumaReduce);


}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  array.forEach(function(elemento){
    cb(elemento);
  });

}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  var nuevoArray = array.map(function(elemento){
    return cb(elemento);
  });
  return nuevoArray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  var nuevoArray = array.filter(function(elemento){
    if(elemento[0]==='a'){        
        return elemento;        //array=['ana' , 'pola', 'asdalksjd']
    }                           // la funcion te da cada elemnto del array y luego si cumple la condicion del if
  });                           //return o se podrai decir que es como un .push() del elemento del array y
  return nuevoArray;            //a partir de ahi lo guarda en nuevoArray.

  // return array.filter(function(elemento){
  //   return elemento[0]==='a';
  // });
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
