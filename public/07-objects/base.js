import $ from "jquery";
$(() => {

    let inputProps = {
      type: 'text'
      , class: 'form-control'
      , placeholder: 'Ingrese su nombre...'
      , id: 'intTxtEjemplo'
    }

    let cssInputProps = {
      position: 'relative'
      , top: '100px'
    }

    $('<input>', inputProps)
      .appendTo('.container')
      .on('keypress', function( custom ) {
        console.log( custom.code );
      });

    $('#intTxtEjemplo').css(cssInputProps);

});
