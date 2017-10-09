var type;
var output;
var keyVal;
document.addEventListener("DOMContentLoaded", function () {
   //step 1: get all the keys from the document
   var output = document.getElementById("readout");
   var keys = document.querySelectorAll(".num");
   var numKeys = document.querySelectorAll(".number");
   var operators = document.querySelectorAll(".symbol");
   var c = document.getElementById("clear");
   var result = document.getElementById("result");
   c.addEventListener("click", function () {
       clear()
   })

   //step 2: assign a value to all keys onclick
   for (var i = 0; i < numKeys.length; i++) {
       numKeys[i].addEventListener("click", function (e) {
           var keyVal = Number(this.innerHTML);
           output.innerHTML += keyVal;
       })

   }
   //assign a type to all the operator keys on click
   for (var o = 0; o < operators.length; o++) {
       operators[o].addEventListener("click", function (e) {
           var operatorVal = this.innerHTML;


           if (operatorVal == "÷") {
               type = "/";
               output.innerHTML += type;
           }
           else if(operatorVal!= "=") {
               type = this.innerHTML;
               output.innerHTML += type;
           }
           

       })

   }
   //get the and display answer on click
   result.addEventListener("click", function () {
       answer();
   })

   function clear() {
       output.innerHTML = "";
   }
   function answer() {
       var answer = eval(output.innerHTML);
       clear();
       output.innerHTML = answer;
   }

})