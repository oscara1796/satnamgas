
// funcion sección conocenos
function display_show_menu_button1(){
  var x = document.getElementById("conocenos-firts-button");
  var y = document.getElementById("conocenos-second-button-mision");
  var z = document.getElementById("conocenos-third-button-servicios");
  y.style.display = "none";
  z.style.display = "none";
  x.style.display = "block";
}

function display_show_menu_button2(){
  var x = document.getElementById("conocenos-firts-button");
  var y = document.getElementById("conocenos-second-button-mision");
  var z = document.getElementById("conocenos-third-button-servicios");
  x.style.display = "none";
  z.style.display = "none";
  y.style.display = "block";
}

function display_show_menu_button3(){
  var x = document.getElementById("conocenos-firts-button");
  var y = document.getElementById("conocenos-second-button-mision");
  var z = document.getElementById("conocenos-third-button-servicios");
  x.style.display = "none";
  y.style.display = "none";
  z.style.display = "block";
}

// Se caba las funciones de conocenos

function display_hiden_info_dic_tecnica(){
 var a = document.getElementById("dictaminacion-tecnica-hide");
 var b = document.getElementById("dictaminacion-pericial-hide");
 var c = document.getElementById("verificacion-tecnica-hide");
 var main = document.getElementById("main");
 var header = document.getElementById("header");
 a.style.display = "block";
 b.style.display = "none";
 c.style.display = "none";
}

function display_hiden_info_dic_pericial(){
 var x = document.getElementById("dictaminacion-tecnica-hide");
 var y = document.getElementById("dictaminacion-pericial-hide");
 var z = document.getElementById("verificacion-tecnica-hide");
 var header = document.getElementById("header");
 var main = document.getElementById("main");
 x.style.display = "none";
 y.style.display = "block";
 z.style.display = "none";
}

function display_hiden_info_verificacion(){
 var x = document.getElementById("dictaminacion-tecnica-hide");
 var y = document.getElementById("dictaminacion-pericial-hide");
 var z = document.getElementById("verificacion-tecnica-hide");
 var main = document.getElementById("main");
 var header = document.getElementById("header");
 x.style.display = "none";
 y.style.display = "none";
 z.style.display = "block";

}

function disabled_display_hidden_info(){
  var x = document.getElementById("dictaminacion-tecnica-hide");
  var y = document.getElementById("dictaminacion-pericial-hide");
  var z = document.getElementById("verificacion-tecnica-hide");
  var body = document.getElementById("body");
  x.style.display = "none";
  y.style.display = "none";
  z.style.display = "none";
}

// Aqui comienzan las funciones de servicios
