import $ from "jquery";

$(() => {
  let indice = $('#slcNumero').val();
  let numero = 1;
  
  $('#btnAgregar').on('click', function () {
    let fila = `
      <tr>
        <td> ${ indice } </td>
        <td> ${ numero } </td>
        <td> ${ indice*numero } </td>
      </tr>
    `;
    $('#tblBodyEjemplo').append(fila);
    
    numero++;
  });

  $('#slcNumero').on('change', function () {
    
    indice = $('#slcNumero').val();
    numero = 1;

    $('#tblBodyEjemplo').find('tr').remove();
  });
});
