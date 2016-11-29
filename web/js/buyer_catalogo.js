
var productos0 = [ ];
var produ_nombre = [ ];
var produ_url = [ ];
var produ_precio = [ ];
var produ_code = [ ];
var produ_canti = [ ];
var produ_pprice = [ ];


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

var comprando = function ()
{
    $( "#vcat-dos" ).hide( 300 );

    $( "#vcat-tres" ).empty();

    $( "#vcat-cuatro" ).empty();

    $( "#vcat-tres" ).show();

    listar();
};

var listar = function ()
{
    var importe = 0;
    var $lis = $( "#vcat-tres" );

    var $lisdiv = $( "<div>" );
    $lisdiv.addClass( "list-div" );
    $lisdiv.append( $( "<h1>" ).text( "Lista de productos comprados" ) );

    for ( var i = 0; i < productos0.length; i++ )
    {
        var $imagen = $( "<img style=\"float:left;\">" );
        $imagen.attr( "src" , produ_url[i] );
        $imagen.attr( "width" , "82" );
        $imagen.attr( "height" , "82" );

        var $prol = $( "<div>" );
        $prol.addClass( "prolop" );

        var $ductol = $( "<p>" );
        $prol.append( $imagen );
        $ductol.text( "  Producto " + ( i + 1 ) + "/" + productos0.length + " : " + produ_nombre[i] + " | Codigo: " + produ_code[i] );
        $prol.append( $ductol );

        var $cac = $( "<p>" );
        $cac.text( "Cantidad a comprar: " + produ_canti[i] );
        $prol.append( $cac );

        var $ducto2 = $( "<p>" );
        $ducto2.text( " Precio unitario: " + accounting.formatMoney( produ_precio[i] ) );

        if ( produ_canti[i] > 1 )
        {
            var $ducto2a = $( "<p>" );
            var mss = "Precio por las " + produ_canti[i] + " unidades: " + accounting.formatMoney( produ_canti[i] * produ_precio[i] );
            $ducto2a.text( mss );
            $prol.append( $ducto2a );
        }

        importe += parseFloat( produ_precio[i] * produ_canti[i] );
        $prol.append( $ducto2 );
        $lisdiv.append( $prol );
    }

    var $impo = $( "<div>" );
    $impo.addClass( "prolop" );
    $impo.text( "Importe total: " + accounting.formatMoney( importe ) );
    $lisdiv.append( $impo );

    var $cant = $( "<div>" );
    $cant.addClass( "prolop" );
    $cant.text( "Cantidad de productos: " + productos0.length );
    $lisdiv.append( $cant );

    var $but = $( "<button>" );
    $but.addClass( "confo" );
    $but.on( "click" , function ( evt )
    {
        back2catalog();
    } );

    var $butcon = $( "<button>" );
    $butcon.addClass( "confo" );
    $butcon.on( "click" , function ( evt )
    {
        confirmado();
    } );

    var $butcomprado = $( "<button>" );
    $butcomprado.addClass( "confo" );
    $butcomprado.on( "click" , function ( evt )
    {
        mostrarCompras();
    } );

    $but.text( "Seguir comprando" );
    $butcon.text( "Confirmar compra" );
    $butcomprado.text( "Mostrar ventas" );
    $lisdiv.append( $but );
    $lisdiv.append( $butcon );
    $lisdiv.append( $butcomprado );
    $lis.append( $lisdiv );
};

var mostrarCompras = function ( )
{
    var $xd = $( "#vcat-cuatro" );

    var $resres0 = $( "<div>" );

    $.ajax( {
        url: "/Binas/getVentas" ,
        //type: "GET"
        dataSrc: function ( json )
        {
            return $.parseJSON( json );
        }
        //data: d
    } ).done(
        function ( datos )
        {
            $jsonx = datos;
            console.log( "sikiera lo iso?" );
            console.log( datos[0] );
            for ( var i = 0; i < datos.length; i++ )
            {
                var $pe = $( "<p>" );
                $pe.text( datos[i]["nombre"] );
                $resres0.append( $pe.clone() );

                $pe.text( datos[i]["fecha"] );
                $resres0.append( $pe.clone() );

                $pe.text( datos[i]["cantidad"] );
                $resres0.append( $pe.clone() );

                $pe.text( datos[i]["usuario"] );
                $resres0.append( $pe.clone() );

                console.log( datos[i]["nombre"] );
                console.log( datos[i]["fecha"] );
                console.log( datos[i]["cantidad"] );
                console.log( datos[i]["usuario"] );
            }



        } );
};

var print = function(q)
{
    $("#vcat-cuatro").append(q);
};

var back2catalog = function ( )
{
    $( "#vcat-tres" ).hide( );
    $( "#vcat-dos" ).show( 400 );
};

var resu = "?";
var allok = true;

var confirmarBDi = function ( i )
{
    var xurl = "/Binas/ws/cat/guardar";

    var s_apikey = getCookie( "apikey" );

    var s_pid = productos0[i];
    var s_cua = produ_canti[i];
    var s_pre = produ_precio[i];
    var s_ppr = produ_pprice[i];

    var zobtenido = function ( datos )
    {
        print( "OK" + JSON.stringify( datos ) );
    };

    var znoobtenido = function ( datos )
    {
        print( "Error al confirmar pedidis" + JSON.stringify( datos ) );
        allok = false;
    };

    var enviar =
        {
            apikey: s_apikey
            , pid: s_pid
            , cua: s_cua
            , pre: s_pre
            , ppr: s_ppr
        };

    $.ajax(
        {
            type: "POST" ,
            url: xurl ,
            data: enviar ,
            contentType: "application/json; charset=utf-8" ,
            dataType: "json"

        } ).done( zobtenido ).fail( znoobtenido );

};

var confirmarBD = function ()
{
    for ( var i = 0; i < productos0.length; i++ )
    {
        if ( allok )
            confirmarBDi( i );
    }

    if ( allok )
    {
        swal( "Pedidos listos" , "" + resu );
    }
    else
    {
        swal( "Ocurrio algo que do debió pasar" + resu );
    }
};

var confirmado = function ( )
{
    //swal( "enviando" );

    if ( confirmarBD() === false )
        return;

    $( "#vcat-tres" ).hide( );
    $( "#vcat-dos" ).show( 200 );
    productos0.length = 0;
    $( "#carritox" ).text( "" + productos0.length );
};

var qwerqwer = function ( )
{
    var $zyx = $( "#vcat-dos" );

    var arre = [ ];

    $( "#cabes" ).removeClass( "nocabe" );
    $( "#cabes" ).addClass( "cabe" );

    var $loading = $( "<img>" );
    $loading.attr( "src" , "http://iswy.ddns.net/resources/loading.gif" );
    $loading.attr( "align" , "center" );
    $loading.attr( "id" , "loadingloading" );

    $zyx.append( $loading );

    //$("#carritox");

    $( "#carritox" ).on( "click" , function ( evt )
    {
        comprando();
    } );

    $( "#howmany" ).on( "click" , function ( evt )
    {
        //console.log( "clickeado" );
        comprando( );
    } );

    /*
     for ( var i = 0; i < 16; i++ )
     {
     arre.push( producto( i , "Producto" + ( i + 1 ) , "http://iswy.ddns.net/produ.png" , "$200.oo" ) );
     }
     */

    //arre.push( producto( i , "Último" , "http://iswy.ddns.net/produ.png" , "10 varos" ) );



    $.ajax( {
        url: "/Binas/GetProducts" ,
        type: "GET"
            //data: d
    } ).done(
        function ( datos )
        {

            if ( datos.code === 200 )
            {
                //swal( "Obtebidos" , "" + datos.msg );
                //console.log( datos );

                $dats = $.parseJSON( datos.msg );

                //swal( "datos.msg[1]: " + $dats[0].productname );

                //console.log( $dats );

                $( "#loadingloading" ).hide( );
                for ( var i = 0; i < $dats.length && i < 100; i++ )
                {
                    arre.push( producto( "" + $dats[i].productid ,
                        "" + $dats[i].productname ,
                        "http://localhost:8080/imagenes/" + $dats[i].productid + ".jpg" ,
                        "" + $dats[i].salepricemin ,
                        "" + $dats[i].stock ,
                        "" + $dats[i].code ,
                        "" + $dats[i].purchprice ) );
                }


                for ( var i = 0; i < arre.length; i++ )
                {
                    $zyx.append( arre[i] );
                }
            }
            else
            {
                swal( "No se pudieron recuperar los productos de la base de datos" );
            }
        } );

    $( '.brand-logo' ).text( "• Catálogo •" );

    $( "#carritox" ).text( "0" );
};
var agregar = function ( id , nombre , precio , url , code , pprice )
{
    //swal( "Agregando producto: " + nombre );

    //$.growl.notice( { title: "" + nombre , message: " + 1 agregado" } );
    Materialize.toast( nombre + " (+1) agregado" , 2800 ); // 4000 is the duration of the toast

    for ( var i = 0; i < productos0.length; i++ )
    {
        if ( productos0[i] === id )
        {
            produ_canti[i] = "" + ( Number( produ_canti[i] ) + 1 );
            return;
        }
    }

    productos0.push( "" + id );
    produ_nombre.push( "" + nombre );
    produ_precio.push( "" + precio );
    produ_url.push( "" + url );
    produ_code.push( "" + code );
    produ_canti.push( "" + 1 );
    produ_pprice.push( "" + pprice );

    $( "#carritox" ).text( "" + productos0.length );

    //console.log( "Agregando producto " + id );
};

var producto = function ( id , nombre , imagenurl , precio , inve , cod , pprice )
{
    var $div_principal = $( "<div>" );

    $div_principal.addClass( "iprodiv" );

    var $imagen = $( "<img>" );
    $imagen.attr( "src" , imagenurl );

    $imagen.attr( "width" , "140" );
    $imagen.attr( "height" , "140" );

    var $div_in_div = $( "<div>" );

    var $p_prin = $( "<p>" );
    $p_prin.text( nombre );

    var $p_sec = $( "<p>" ).append( "Precio: " + accounting.formatMoney( precio ) );
    if ( inve == 0 )
    {
        inve = "no hay!";
    }
    var $inv = $( "<p>" ).append( "Quedan: " + inve );

    var $but = $( "<button>" );

    $but.addClass( "okbut" );

    $but.text( "Agregar" );

    $but.attr( "id" , "cat-but-" + id );

    $but.on( "click" , function ( evt )
    {
        agregar( id , nombre , precio , imagenurl , cod , pprice );
    } );

    $div_in_div.append( $p_prin );
    $div_in_div.append( $p_sec );
    $div_in_div.append( $inv );
    $div_in_div.append( $but );

    $div_principal.append( $imagen );
    $div_principal.append( $div_in_div );

    return $div_principal;
};

$( document ).ready( qwerqwer );