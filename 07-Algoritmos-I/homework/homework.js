'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var arr = [];
  var i = 1;

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var orden = false;

  while(!orden){
    orden = true;
    for(let i = 0; i < array.length -1; i++){
      if(array[i] > array[i + 1]){
        let aux = array[i];
        array[i] = array[i+1];
        array[i+1] = aux;
        orden = false;
      }
    }
  }

  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  
  for(let i = 1; i < array.length; i++){
    if(array[i] < array[i-1]){
      let aux = array[i];
      while(aux < array[i-1]){
        array[i] = array[i-1];
        i--
      }
      array[i] = aux;
    }
  }

  return array;

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length - 1; i++){
    let minIndex = i;
    for(let j = i + 1; j < array.length; j++){
      if(array[j] < array[minIndex]){
        minIndex = j;
      }
    }
    let aux = array[i];
    array[i] = array[minIndex];
    array[minIndex] = aux;
  }

  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
