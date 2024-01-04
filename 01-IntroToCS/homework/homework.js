'use strict';

function BinarioADecimal(num) {
   var numero = num.split("").reverse().join("");
   var sum = 0;
   for(let i = 0; i < numero.length; i++){
      sum = sum + numero[i] * 2 ** i;
   }
   return sum;
}

function DecimalABinario(num) {
   var array = [];
   while(num > 0){
       array.unshift(num % 2);
       num = Math.floor(num / 2);
   }     
   return array.join("");
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
