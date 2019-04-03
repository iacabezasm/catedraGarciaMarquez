function mostrar_seccion(menu_a_mostrar){
    $(".div_menu").hide("slow");
    // El menu que se va a mostrar
    $("#div_"+menu_a_mostrar).show("slow");
    $('.btn-wid').removeClass("btn-wid-presionado");
    $("#btn_"+menu_a_mostrar).addClass("btn-wid-presionado");
}

$( document ).ready(function() {
    $( "#btn_informacion_general" ).trigger( "click" );
});
