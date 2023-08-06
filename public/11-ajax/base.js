import $ from "jquery";


$(() => {
  
  // CROSS

  $.ajax({
    type: "GET",
    url: "fakedata.json",
    dataType: "json",
  }).done( function ( done ) {
    // Try
    // After type data
    console.log(done);
    $('#picFoto').attr( 'src', done.foto );
    $('#txtNombre').val( done.nombre );
    $('#txtDireccion').val( done.direccion );
    $('#txtGenero').val( done.genero );
    $('#txtTelefono').val( done.telefono );

  }).fail( function ( fail ) {
    // Catch
  }).always( function ( always ) {
    // Finally
  });

});
