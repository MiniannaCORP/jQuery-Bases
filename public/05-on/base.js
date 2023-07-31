import $ from "jquery";

$(() => {

  // //! Busca en todo el body, solo las etiquetas << h3 >>
  let contador = 0;
  
  $('body').on('click', 'h3', function () {
    contador++;
    let h3Dinamico = `<h3 id="h3-${ contador }" >Dinamico ${ contador }</h3> <hr> `
    
    //Al inicio
    // $('body').prepend(h3Dinamico);
    
    //Al final
    $('body').append(h3Dinamico);


    $(`#h3-${contador}`).on('click', function () {
      console.log( `Función dinámica número ${ contador }` );
    });

    // $().bind(eventType, function (e) {
      
    // });
    
  });

});
