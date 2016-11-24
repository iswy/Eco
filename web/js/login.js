function getCookie( cname )
{
    var name = cname + "=";
    var ca = document.cookie.split( ';' );
    for ( var i = 0; i < ca.length; i++ )
    {
        var c = ca[i];
        while ( c.charAt( 0 ) == ' ' )
        {
            c = c.substring( 1 );
        }
        if ( c.indexOf( name ) == 0 )
        {
            return c.substring( name.length , c.length );
        }
    }
    return "";
}

var print = function ( str )
{
    $( "#print" ).append( $( "<p>" ).text( str ) );
};

var agregaroption = function ( str , index )
{
    $sel = $( "select[id=sseell]" );

    $sel.append( $( '<option>' , { value: index , text: '' + str } ) );

    $sel.material_select();
};

var obtenerUsuarios = function ()
{
    var uurl = "http://localhost:8080/Binas/ws/ususer/obtener";

    var obtenido = function ( datos )
    {
        print( JSON.stringify( datos ) );

        d = datos;

        //var d = JSON.parse(datos);


        d.forEach( function ( usuario , index )
        {
            agregaroption( usuario.username , index );
            print( usuario.username );
            print( "index:" + index );
        } );

    };
    var noobtenido = function ()
    {
        print( "ajax not worked for url: " + uurl );

        for ( var i = 0; i < 10; i++ )
        {
            agregaroption( "xyz." + i );
        }
    };

    $.ajax(
        {
            type: "GET" ,
            url: uurl ,
            dataType: "json"
        } ).done( obtenido ).fail( noobtenido );
};

var iniciar = function ()
{
    var uurl = "http://localhost:8080/Binas/ws/ususer/login";

    var usuario = $( "#sseell" ).val();
    var contras = $( "#contra" ).val();

    var zobtenido = function ( datos )
    {
        print( JSON.stringify( datos ) );

        d = datos;

        //var d = JSON.parse(datos);


        d.forEach( function ( usuario , index )
        {
            agregaroption( usuario.username , index );
            print( usuario.username );
            print( "index:" + index );
        } );

    };

    var znoobtenido = function ()
    {
        print( "ajax not worked for url: " + uurl );

        for ( var i = 0; i < 10; i++ )
        {
            agregaroption( "xyz." + i );
        }
    };

    $.ajax(
        {
            type: "POST" ,
            url: uurl ,
            data: { us: usuario , co: contras } ,
            dataType: "json"
        } ).done( zobtenido ).fail( znoobtenido );
};


var lologin = function ()
{
    "use strict";

    $( '.brand-logo' ).text( "Login Login" );

    // <materialize>
    $( 'select' ).material_select();
    // </materialize>

    $( '#sseell' ).on( "change" , function ( evt )
    {
        $( "#loginbut" ).removeClass( "disabled" );
    } );

    $( "#loginbut" ).on( "click" , function ( evt )
    {
        var querol = "admin";
        var valor = $( "#sseell option:selected" ).val();

        if ( valor > 3 )
            querol = "cliente";

        document.cookie = "nombre=" + $( "#sseell option:selected" ).text() + ";";
        document.cookie = "rol=" + querol + ";";

        if ( querol == "admin" )
        {
            $( "#content_content" ).load( "admin_menu.html" );
            $( "#header_header" ).load( "header_admin.html" );
        }
        if ( querol == "cliente" )
        {
            $( "#content_content" ).load( "buyer_principal.html" );
            $( "#header_header" ).load( "header_buyer.html" );
        }


    } );

    obtenerUsuarios();


};

$( document ).ready( lologin );
