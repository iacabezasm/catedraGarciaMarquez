// handlebars -m compartido/ > compartido.js

// handlebars -m plantilla_un/ > plantilla_un.js
function renderizar_plantilla_un(){
  $( "#plantilla_un_header" ).html( Handlebars.templates['header'] );
  $( "#plantilla_un_servicios" ).html( Handlebars.templates['servicios'] );
  $( "#plantilla_un_footer" ).html( Handlebars.templates['footer'] );
}

// handlebars -m inicio/ > inicio.js
function renderizar_inicio(){
  $( "#menu_navegacion_todos_los_roles" ).html( Handlebars.templates['inicio_menu_navegacion'] );
}
