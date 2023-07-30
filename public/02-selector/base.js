import $ from "jquery";
$(() => {

  // //! Esto implica que por cada línea se haga un barrido del DOM para buscar todas las imágenes
  // $('img').attr('src', 'media/profesor.jpg')
  // $('img').removeClass('rounded');
  // $('img').addClass('img-thumbnail');

  // //? Esto solo hace un barrido.
  $('img').attr('src', 'media/profesor.jpg')
    .removeClass('rounded')
    .addClass('img-thumbnail');

  // //? De todos los hijos de la clase  << col-sm-5 >>, que solo sean de tipo << p >>, el primer elemento, << subindice 0 >>
  // $('.col-sm-5').children('p').eq(0)

  $('.col-sm-5')
    .find('p')
    // .text('<b>Hola</b>'); //Solo es texto
    .html('<b>Hola</b>'); //Interpreta HTML

  // //? La función << eq >> selecciona un elemento, y la función << end >> desselecciona, para que se pueda trabajar con otro en la misma instrucción
  $('ul li')
    .eq(0).css('color', 'red').end()
    .eq(1).css('color', 'orange').end()
    .eq(2).css('color', 'green').end()
    .eq(3).css('color', 'blue')
    .eq(4).css('color', 'brown');
  // //? Como no se puso end en la líne -- .eq(3), la última instrucción, no tuvo efecto



  

 

});
