// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  var a=Object.entries(objeto);
  return a;
  // var nuevoArray=[];
  // for(var clave in objeto){
  //   nuevoArray.push([clave,objeto[clave]]);
  // }
  // return nuevoArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  var objetoFinal={};
  var cont=0;
  for(var i=0 ; i<string.length ; i++){
    if(objetoFinal.hasOwnProperty(string[i])){
      objetoFinal[string[i]]+=1;
    }else{
      objetoFinal[string[i]]=1;
    }
  }

  return objetoFinal;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  var mayu='';
  var minu='';
  for(let i=0 ; i<s.length ; i++){
    if(s[i] === s[i].toUpperCase()){
      mayu+=s[i];

    }else{
      minu=minu+s[i];
    }
  }
  return mayu+minu;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  
  var strAarray=str.split(' ');
  //strAarray=["The", "Henry", "Challenge", "is", "close!"]

  var rts = strAarray.map(function(elemento){
    return elemento.split('').reverse().join('');
  })
  return rts.join(' ');

  //      lo que hace es toma cada elemento de strAarray y aplica split para separarlo ['T', 'h','e']
  //      a ese array aplica reverse para invertirlo ['e', 'h','T'] , luego con el join lo vuelve a unir ['ehT'].
  //      El return dentro de la funcion de map realiza la accion como si fuera un push().
  //      str=["ehT", "yrneH", "egnellahC", "si", "!esolc"]
  //      Cuando salimos de map tenemos que retornar un string del array que esta en la linea de arriba,
  //      para esto usamos un join(' ') tiene que tener espacio entre las comillas. pq cada vez q une cada elemento
  //      le agrega un espacio.
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"

  123321
  var numeroAstr= numero.toString();
  var acu='';

  for(let i = numeroAstr.length-1 ; i >=0 ; i--){
    acu+=numeroAstr[i];
  }

  if(acu===numeroAstr){
    return 'Es capicua';
  }else{
    return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //var nuevoArray= cadena.split('');

  var cadenaNueva='';

  for(let i=0 ; i<cadena.length ; i++){
    if(cadena[i] === 'a' || cadena[i] === 'b' || cadena[i] === 'c' ){
      continue;
    }else{
      cadenaNueva+=cadena[i];
    }
  }
  return cadenaNueva;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  var bandera=true;
  while(bandera){
    bandera=false;
    for(var i=0 ; i<arr.length-1 ; i++){              //el arr.length-1 es importate pq despues cuado el for llegue al ultimo valor
                                                      //y en el if tenga que comparar el arr[i+1] NO EXISTE
      if(arr[i].length > arr[i+1].length){            // 

        var aux=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=aux;
        bandera=true;

      }

    }

  }
  return arr;
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  
  var arreglo3=[];
  for(let i=0 ; i<arreglo1.length ; i++){
    for(let j=0 ; j<arreglo2.length ; j++){
      if(arreglo1[i] === arreglo2[j]){
        arreglo3.push(arreglo1[i]);
      }
    }
  }
  return arreglo3;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

