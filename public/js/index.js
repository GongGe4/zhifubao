window.onscroll  =   function() {    

    var  t  =  document.documentElement.scrollTop  ||  document.body.scrollTop;
    console.log("top=" + t);     
    var  saoma2 =  document.getElementById( "saoma2" );
    console.log(saoma2);    
    if ( t  >=  100 )  {        
        saoma2.style.top  = "0px";    
        console.log(saoma2);
    } 
    else  {        
        saoma2.style.top  =  "-100px";    
        console.log(12);
    }
}