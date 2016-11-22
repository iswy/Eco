var bodymsg = function ( msg )
{
    $( "#bodybody" ).append( $( "<p>" ).text( msg ).addClass( "quickp" ) );
};

var main2 = function ()
{
    $( ".brand-logo" ).text( "e-commerce" );

    $( '#nav-mobile a' ).on( 'click' , function ( e )
    {
        e.preventDefault();

        var page = $( this ).attr( 'href' );
        $( '#content_content' ).load( page , { redirect: 'no' } );
        $( '#nav li' ).removeClass( 'active' );
        $( this ).parent().addClass( 'active' );
    } );
};
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
var main = function ()
{
    "use strict";

    bodymsg( "Loading ..." );

    if ( getCookie( "rol" ) == "admin" )
    {
        $( "#header_header" ).load( "header_admin.html" );
        $( "#content_content" ).load( "admin_menu.html" );
    }
    else if ( getCookie( "rol" ) == "user" )
    {
        $( "#header_header" ).load( "header_buyer.html" );
        $( "#content_content" ).load( "buyer_principal.html" );
    }
    else
    {

        $( "#header_header" ).load( "header01.html" , main2 );

        //$("#content_content").load("loading01.html",{redirect:'no'});

        window.setTimeout( function (  )
        {
            var page = "login.html";
            $( '#content_content' ).load( page , { redirect: 'no' } );
        } , 1500 );
    }
};
$( document ).ready( main );


