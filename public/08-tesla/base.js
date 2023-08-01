import $ from "jquery";


$(() => {
  
  
  const selectTesla = {
    colors: ['Blanco', 'Rojo', 'Cafe', 'Verde', 'Negro'] //Default
    , changeColor: () => {

    }
    , init: ( options ) => {

      $.extend( selectTesla, options );

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

        $('#imgAuto').attr('src', url);
      });
    }
  }
  
  // //! Esto reemplaza el parámetro << colors >> de << selectTesla >>
  const teslaColors = ['Blanco'];
  
  selectTesla.init(({
    colors: teslaColors
  }));

  


});
