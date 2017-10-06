document.addEventListener("DOMContentLoaded", function(){
    //step 1: get all the keys from the document
    var readout=document.getElementById("readout");
    var keys=document.querySelectorAll(".num");
    var numkeys=document.querySelectorAll(".number");
    var operators= document.querySelectorAll(".symbol");
    //step 2: assign a value to all the keys onclick
    for(var i=0; i<keys.length; i++){
        var input=[];
        
        keys[i].addEventListener("click", function(e){
            keyVal=this.innerHTML;
            input.push(keyVal);
            readout.innerHTML=output;
            console.log (input);
             
        })
       
    }


 
})