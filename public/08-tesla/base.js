import $ from "jquery";


$(() => {
  
  //fadeIn fadeOut para un preloader.
  
  const carView = {
    
    // //! En este ejercicio, dentro de la constante << carView >>, this es << carView >>
    colors: ['Blanco', 'Rojo', 'Cafe', 'Verde', 'Negro'] //Default
    , changeColor: ( img ) => {

      if ( img === undefined ) {
        let color = carView.colors[0];
        img = `media/modelS-${ color }.jpg`;
      }
      
      const imageProps = {
        src: img
        , class: 'img-fluid'
      }

      $('<img>', imageProps).on('load', function() {
        // //!Dentro de esta función << this >> es la << img >>
        // //? Si la función callback fuese << arrow >> " () => {} ", el << this >> se pierde y sale undefined
        $('#divVistaPrevia').find('img').remove();
        $(this).appendTo('#divVistaPrevia');
      });

    }
    , init: ( options ) => {
      $.extend( carView, options );

      teslaColors.forEach(( color ) => {
        const optionProps = {
          value: color
          , text: color
        };
        $('<option>', optionProps).appendTo('#slcColor');
      });

      $('#slcColor').on('change', function () {
        let color = $(this).val();
        let url = `media/modelS-${ color }.jpg`;
        carView.changeColor( url );
      });

      carView.changeColor();
    }
  }
  
  // //! Esto reemplaza el parámetro << colors >> de << carView >>
  const teslaColors = ['Rojo', 'Cafe', 'Verde', 'Negro'];
  carView.init(({
    colors: teslaColors
  }));

});
