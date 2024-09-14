   "use strict";


var myArray = [ 'ali', 'hasan', 'abbas', 'adel', 'alireza' ];
var value ='hasan'   ;
containsValue(myArray,value);

function containsValue(myArray, value) {


    if(myArray.includes(value)) {
    alert(  " The array contains the value " + value  + "  at index" + myArray.indexOf(value)) ;
  }
}

  
