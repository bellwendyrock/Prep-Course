// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  for(var i=0 ; i<array.length ; i++){
    array[i]=array[i]+1
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  var a=palabras.join(' ');
  return a;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  for(var i=0 ; i<array.length ; i++){
    if(elemento===array[i]){
      return true;
    }
    
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  var acu=0;
  for(var i=0 ; i<numeros.length ; i++){
    acu=acu+numeros[i];
  }
  return acu;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  var acu=0;
  
  for(var i=0 ; i<resultadosTest.length ; i++){
    acu=acu+resultadosTest[i];
  }
  return acu/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  return Math.max(...numeros);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  if(arguments.length===0){
    return 0;
  }else if(arguments.length===1){
    return arguments[0];
  }else{
    let acu=1;
    for(let i =0 ; i<arguments.length ; i++){
      acu=acu*arguments[i];
    }
    return acu;

  }


}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  let cont=0;
  for(let i =0 ; i<arreglo.length ; i++){
    if(arreglo[i]>18){
      cont=cont+1;
    }

  }
  return cont;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  const semana=['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes' , 'Sabado'];
  if(numeroDeDia===1 || numeroDeDia===7){
    return 'Es fin de semana';
  }else{
    return 'Es dia Laboral';
  }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  var m=n.toString();
  
  if(m[0]==='9'){
    return true;
  }else{
    return false;
  }
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  
  var cont=0;
  for(let i=0 ; i<arreglo.length ;i++){
    if(arreglo[0]===arreglo[i]){
      cont=cont+1
    }
  }
  if(cont===arreglo.length){
    return true;
  }else{
    return false;
  }
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  let nuevo_array=[];
  for(let i=0 ; i<array.length ;i++){
    if(array[i]==='Enero' || array[i]==='Marzo' || array[i]==='Noviembre'){
      nuevo_array.push(array[i])
    }

  }

  if(nuevo_array.length!==3){
    return 'No se encontraron los meses pedidos';
    
  }else{
    return nuevo_array;
  }
 
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  const nuevo_array=[];
  for(let i=0 ; i<array.length ;i++){
    if(array[i]>100){
      nuevo_array.push(array[i])
    }
  }
  return nuevo_array;
}


function breakStatement(numero) {
  // Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array. 
  // Devolver el array
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  // devolver: "Se interrumpió la ejecución"
  // Pista: usá el statement 'break'
  
  let array=[];
  let i=0;

  do{
    i=i+1;
    numero=numero+2;
    array.push(numero)
    if(numero===i){
      break
    }
  }while(i<10);
    
  if(numero===i){
    return "Se interrumpió la ejecución";
  }else{ 
    return array;
  }

 

}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  let array=[];
  let i=0;

  do{
    i=i+1;
    if(i===5){
      continue
    }else{
      numero=numero+2;
      array.push(numero)
    }

  }while(i<10);
  
  return array;
  

 
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
