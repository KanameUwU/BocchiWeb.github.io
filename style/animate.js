$(document).ready(main);

var contador = 1 ;

function main(){
    $('.pantalla_carga').toggle();
    $('.boton').click(function(){
        $('.aside').toggle();
    });

}