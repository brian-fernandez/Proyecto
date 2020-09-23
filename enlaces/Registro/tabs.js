function contenedor(pos) {
    var i;
    var x = document.getElementsByClassName("mostrador");
    
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(pos).style.display = "block";
    
  };