   "use strict";





var myArray = [ 'ali', 'hasan', 'abbas', 'adel', 'alireza' ];
var value ='hasan'   ;
containsValue(myArray,value);

function containsValue(myArray, value) {


    if(myArray.includes(value)) {
    alert(  " The array contains the value " + value  + "  at index" + myArray.indexof(value)) ;



  }

}

   /*
function containsValue(arr,value){

    for( i=0;i<arr.lenght;i++){
      if(arr[0]=== value){
               console.log("ali");


      }
      else alert (`The array does not contain the value ${value}.`);
    }

}

 containsValue(arrayList, valueSerch) ;

 */
