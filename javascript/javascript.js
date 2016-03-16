var t;
    var g1 = document.getElementById("print1");
    var g2 = document.getElementById("print2");
    var g3 = document.getElementById("print3");
      
    function minus() {
        if (document.getElementById("num")) {
            var curr = parseInt(document.getElementById("num").innerHTML);
        }
        if(curr == 0){
            document.getElementById("num").innerHTML = 60;
        }else{
            if (curr && curr <= 61) {
                if (curr <= 10) {
                    document.getElementById("num").innerHTML = "0" + (curr - 1);
                } else {
                    document.getElementById("num").innerHTML = curr - 1;
                }
            }
        }
        t = setTimeout(function() {
            minus();
        }, 1000);
    };
    minus();
    function reset() {
        clearTimeout(t);
        document.getElementById("num").innerHTML = 61;
        // minus();
        //document.write(document.getElementById("num").innerHTML);
        //g1.innerHTML=t;
        minus();
        //clearTimeout(t);
        //document.write(t);
    }
     
   var redo;
   var con =-1;
      
   function stop(){    
       if(redo == con){
          //clearTimeout(t);
          minus();
          redo = -2;
          con = -1;
       }else{
          clearTimeout(t);
          redo=t;
          con=t;         
        }
        //g1.innerHTML = redo;
        //g2.innerHTML = con;      
        //g3.innerHTML = t;
       //clearTimeout(t);
    }
      