import $ from "jquery";

// //! Ready function
$(() => {

  console.log( 'La página cargó todos los elementos' );

  $('#btnUno').on('click', function() {
    console.log('click');
  });

  // //! CUIDADO, el this, con la función lambda o arrow function, es distinto
  // $('.img100').on('mouseenter', () => {
  //   console.log('ingresó');
  //   console.log( $(this) ); // Esto es otro objeto
  //   $(this).attr('src', 'media/nophoto.jpg');
  // });
  
  $('.img100').on('mouseenter', function() {
    console.log('ingresó'); 
    console.log( $(this) ); // Esta es la imagen
    $(this).attr('src', 'media/nophoto.jpg');
  });


  $('.img100').on('mouseleave', function() {
    $(this).attr('src', 'media/profesor.jpg');
  });
  

  $('.divRojo').on('click', function () {
    console.log(' Hice click en el div Rojo ');
  });

  
  $('#linkUdemy').on('click', function ( custom ) {
    // //! Anula el evento
    custom.preventDefault();

    let link = $(this).attr('href');

    console.log( link );

    window.location = link;
  });


});

