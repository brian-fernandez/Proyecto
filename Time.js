

  



  function clock() {
      var horas = document.getElementById('horas');
      var minutos = document.getElementById('minutos');
      var segundos = document.getElementById('segundos');

     
      var h = new Date().getHours();
      var m = new Date().getMinutes();
      var s = new Date().getSeconds();

      horas.innerHTML = h;
      minutos.innerHTML = m;
      segundos.innerHTML = s;
    


  }
  var interval = setInterval(clock, 1000);


  var month = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
  var day = new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");
  var d = new Date();
  var dia_sem=day[d.getDay()];
  var dia=d.getDate();
  var mes=month[d.getMonth()];
  var años = d.getFullYear();
  document.write(dia_sem+" / "+dia+" / "+mes+" / "+años);