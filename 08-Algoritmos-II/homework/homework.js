'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) return array;
  let pivot = 0;
  var arrMenores = [];
  var arrMayores = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== pivot) {
      if (array[pivot] >= array[i]) {
        arrMenores.push(array[i]);
      } else {
        arrMayores.push(array[i]);
      }
    }
  }
  var arr = quickSort(arrMenores).concat(array[pivot]).concat(quickSort(arrMayores));

  return arr;
  //return [...quickSort(arrMenores), array[pivot], ...quickSort(arrMayores)]; //! Otra forma usando operador spread  
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
  if(array.length === 1) return array;

  let div = Math.floor(array.length / 2);

  let left = array.slice(0, div);
  let right = array.slice(div);
  
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  let arr = [];

  while(left.length && right.length){
    if(left[0] < right[0]){
      arr.push(left.shift());
    }else{
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
