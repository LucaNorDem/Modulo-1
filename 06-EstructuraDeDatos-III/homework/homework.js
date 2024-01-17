'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). 
  Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}

BinarySearchTree.prototype.insert = function (value){
   var newBST = new BinarySearchTree(value);

   if(value < this.value){
      if(this.left){
         this.left.insert(value);
      }else{
         this.left = newBST;
      }
   }else{
      if(this.right){
         this.right.insert(value);
      }else{
         this.right = newBST;
      }
   }
}

BinarySearchTree.prototype.size = function(){
   if(!this.left && !this.right) return 1;
   if(!this.left) return 1 + this.right.size();
   if(!this.right) return 1 + this.left.size();
   if(this.left && this.right) return 1 + this.left.size() + this.right.size();
}

BinarySearchTree.prototype.contains = function(value){
   if(this.value === value) return true;
   if(value < this.value){
      if(this.left){ 
         return this.left.contains(value);
      }else{return false;}
   }else if(value > this.value){
      if(this.right){
         return this.right.contains(value);
      }else{return false;}
   }   
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
   //* IN.ORDER
   if(order === "in-order" || !order){
      if(this.left){
         this.left.depthFirstForEach(cb, order);
      }
      cb(this.value);
      if(this.right){
         this.right.depthFirstForEach(cb, order);
      }
   }

   //* PRE-ORDER
   if(order === "pre-order"){
      cb(this.value);
      if(this.left){
         this.left.depthFirstForEach(cb, order);
      }
      if(this.right){
         this.right.depthFirstForEach(cb, order);
      }
   }

   //* POST-ORDER
   if(order === "post-order"){
      if(this.left){
         this.left.depthFirstForEach(cb, order);
      }
      if(this.right){
         this.right.depthFirstForEach(cb, order);
      }
      cb(this.value);
   }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, queue = []){
   if(this.left){
      queue.push(this.left);
   }
   if(this.right){
      queue.push(this.right);
   }

   cb(this.value);

   if(queue.length > 0){
      queue.shift().breadthFirstForEach(cb, queue);
   }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
