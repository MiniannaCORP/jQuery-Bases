import $ from "jquery";

$(() => {
  // //! Es lo mismo
  let valueCustomAttr = $('#divEjemplo').attr('data-atributo-customizado');
  let valueCustomAttr2 = $('#divEjemplo').data('atributo-customizado');

  console.log( valueCustomAttr );
  console.log( valueCustomAttr2 );
});
