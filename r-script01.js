// automatic slides...
mainIndx = 0;
   change();

   function change(){
   let i;
   t = document.getElementsByClassName("slides");

   for(i = 0; i < t.length; i++){
    t[i].style.display = "none";  
   }

   mainIndx++;

   if(mainIndx > t.length){mainIndx = 1}    
   t[mainIndx-1].style.display = "block";  
   setTimeout(change, 3000); // Change image every 4000 seconds
   }
