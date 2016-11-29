var print = function ( s )
{
    $( "#print" ).append( s );
};

var obtener_compras = function ()
{
    var xurl = "/Binas/ws/cat/ver";

    var zobtenido = function ( datos )
    {
        print( "OK " + JSON.stringify( datos ) );
    };

    var znoobtenido = function ( datos )
    {
        print( "Error al obtener compras " + JSON.stringify( datos ) );
    };

    var enviar =
        {
            usuario: "Victor"
        };

    $.ajax(
        {
            type: "POST" ,
            url: xurl ,
            data: JSON.stringify(enviar) ,
            contentType: "application/json; charset=utf-8" ,
            dataType: "json"

        } ).done( zobtenido ).fail( znoobtenido );
};

var buyer_principal = function ()
{
    $( ".collection a" ).on( "click" , function ( e )
    {
        e.preventDefault();
        //guardar los atributos dentro de page
        var page = $( this ).attr( 'href' );
        $( '#content_content' ).load( page , { redirect: 'no' } );
    } );

    obtener_compras();

};
$( document ).ready( buyer_principal );