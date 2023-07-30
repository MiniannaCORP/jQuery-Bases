import $ from "jquery";


// //! Obsoleto
// //! Cuando se termina de cargar toda la página, salta este evento, podemos colocar la referencia del archivo "JS" antes del << BODY >> si queremos, de lo contrario, tendrá que estar todo el código "JS" al final del << BODY >>.
$(document).ready(function(){ /*Código*/ });


// //? Moderno
$(() => {

  $('ul').css('color', 'red');
  $('ul').css('font-weight', 'bold');
  $('ul').addClass('greenText');

  $('li:first-child').css('color', 'red');
  $('li:last-child').css('color', 'orange');

});
