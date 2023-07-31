import $ from "jquery";

// //! Función anónima
(() => {
  //Contenido
  let dds = $('dd');

  dds.hide();

  // Primer acordeón
  dds.eq(0).show();

  $('dt').on('mouseenter', function () {
    
    //Oculta todos
    // dds.hide();

    //Efecto delay hide
    dds.slideUp(200);
    
    $(this)
      .next() //? Siguiente elemento dentro del << dt >>, en este caso sería << dd >>
      // .show() // Muestra
      .slideDown(200);
  });


})()