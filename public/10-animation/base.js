import $, { queue } from "jquery";

$(() => {
  
});

let $caja = $('#caja');

const cajaProps = {
  left: 0
  , top: 0
}

const moreProps = {
  width: '50px'
}

const mover = ( caja, dir ) => {
  caja.clearQueue();
  switch ( dir ) {
    case 'up': cajaProps.top -= 50; break;
    case 'down': cajaProps.top += 50; break;
    case 'left': cajaProps.left -= 50; break;
    case 'right': cajaProps.left += 50; break;
    
    case 'reset':
      cajaProps.left = 0;
      cajaProps.top = 0;
      moreProps.width = '50px';
    break;
  }
  
  caja.animate(cajaProps, 100, function() {
    // //!Lo que suceda dentro de la función será luego de que termine la primera animación, en este caso 100 milisegundos después
    console.log( 'Mas funcionalidad' );

    moreProps.width = (parseInt(moreProps.width.split('px')[0]) + 10) + 'px';
    
    caja.animate( moreProps, 150 );
  }).css({ backgroundColor: 'green' }, 200); // //!Se puede concatenar luego o trabajar dentro
}

$(document).on('keypress', function ( event ) {
  let keyCode = event.code;

  let dir = 'none';

  switch ( keyCode ) {
    case 'KeyA': dir = 'left'; break;
    case 'KeyS': dir = 'down'; break;
    case 'KeyD': dir = 'right'; break;
    case 'KeyW': dir = 'up'; break;
    case 'KeyR': dir = 'reset'; break;
  }

  mover($caja, dir);
});

$('.btn').on('click', function () {
  let dir = $(this).attr('data-custom-id');
  mover( $caja , dir );
});