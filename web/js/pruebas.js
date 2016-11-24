
function println( str )
{
    $( "#ph" ).append( $( "<p>" ).text( str ) );
}
;
var pruebas = function ( )
{
    println( "Hello world" );
    println( "Enviadno JSON a Binas/iniciar" );


    var postpost = $.post( "Binas/iniciar" , function ( )
    {
        alert( "success" );
    } )
        .done( function ( datos )
        {
            println( JSON.stringify(datos) );
        } )
        .fail( function ( )
        {
            println( "error al enviar el post" );
        } )
        .always( function ( )
        {
            println( "terminado" );
        } );

};
$( document ).ready( pruebas );