var ids = [ ];

var obtener = function ()
{
    $.get( "/Binas/GetProducts" , function ( data , status )
    {
        $dat = data;

        $( "#tabla" ).append( "<br>" );
        $( "#tabla" ).append( "<br>" );
        $( "#tabla" ).append( "<br>" );
        $( "#tabla" ).append( "<br>" );
        $( "#tabla" ).append( "<br>" );

        var $table = $( "<table>" );
        $table.addClass( "striped" );
        $table.addClass( "responsive-table" );

        var $tbody = $( "<tbody>" );

        $.each( $.parseJSON( data.msg ) , function ( i , row )
        {
            var $tr = $( "<tr>" );
            $tr.append( $( "<td>" ).text( row.productid ) );
            $tr.append( $( "<td>" ).text( row.code ) );
            $tr.append( $( "<td>" ).text( row.productname ) );
            $tr.append( $( "<td>" ).text( row.brand ) );
            $tr.append( $( "<td>" ).text( row.purchprice ) );
            $tr.append( $( "<td>" ).text( row.stock ) );
            $tr.append( $( "<td>" ).text( row.salepricemin ) );
            $tr.append( $( "<td>" ).text( row.reorderpoint ) );
            $tr.append( $( "<td>" ).text( row.currency ) );
            $tr.append( $( "<td>" ).text( row.categoryid ) );
            $tr.append( $( "<td>" ).text( row.salepricemay ) );

            $tbody.append( $tr );
        } );

        $table.append( $tbody );
        $( "#tabla" ).append( $table );

    } );
};

var URL = "/glassfish-4.1.1/glassfish/domains/domain1/config/img/"; //en el servlet "NewImg" se explica el por k de esta ruta
var NombreArchivo = "";
var ultimoIDE = 0;

function subirImagen( elemento )
{
    ultimoIDE++; //tras recuperar el valor de ide del ultimo registro, se le suma uno mas para que concuerde con el
    //nombre del proximo archivo
    var file = elemento.files[0]; //permite elegir el archivo, en este caso es solo uno, el primero que es 0
    var objHidden = document.formulario.nombre; //referencia
    objHidden.value = file.name;
    NombreArchivo = file.name;
    if ( NombreArchivo.match( /([^\s]+(?=\.(jpg))\.\2)/gm ) )
    { //si es un archivo jpg
        NombreArchivo = ultimoIDE + ".jpg";
    }
    else if ( NombreArchivo.match( /([^\s]+(?=\.(png))\.\2)/gm ) )
    { //si es que es un png
        NombreArchivo = ultimoIDE + ".png";
    }
    else
    {
        window.alert( "Error en la selección de archivo: solo se admiten archivos con formato diferente de .png o .jpg" );
        return; //no llevar a cabo ninguna operacion, este metodo se ejecuta antes que "nuevo producto"
    }
    objHidden.value = NombreArchivo;
    document.formulario.target = "null"; //cuanod se procese el formulario se dirige al iframe y no al servlet
    document.formulario.action = "NewImg"; //escribir le nombre dle archivo que va a procesar (sevlet)
    document.formulario.submit();
}

var main_productos = function ()
{
    "use strict";

    ids.push( "codigo" );
    ids.push( "producto" );
    ids.push( "marca" );
    ids.push( "precio_ad" );
    ids.push( "stock" );
    ids.push( "precio" );
    ids.push( "reorden" );
    ids.push( "moneda" );
    ids.push( "categoria" );
    ids.push( "precio_may" );

    Materialize.updateTextFields();
    $( '.brand-logo' ).text( "• Admin • Producto" );

    $( "input[id=precio_ad]" ).change( function ( assddd )
    {
        var n = parseInt( $( "#precio_ad" ).val() );
        if ( !isNaN( n ) )
        {
            $( "#precio" ).val( n * 2 );
            $( "label[for=precio]" ).addClass( "active" );

            $( "#precio_may" ).val( n * 1.5 );
            $( "label[for=precio_may]" ).addClass( "active" );

            $( "#reorden" ).val( "22" );
            $( "label[for=reorden]" ).addClass( "active" );

            $( "#stock" ).val( 30 );
            $( "label[for=stock]" ).addClass( "active" );

            $( "#moneda" ).val( "MXN" );
            $( "label[for=moneda]" ).addClass( "active" );

            $( "#categoria" ).val( "AutoCat" );
            $( "label[for=categoria]" ).addClass( "active" );

            $( "#okbut" ).removeClass( "disabled" );

            Materialize.updateTextFields();
        }
        else
        {
            //$("#precio_ad").val("100");
            Materialize.updateTextFields();
        }

        var $in = $( "<input>" );
        $in.attr( "type" , "file" );
        $in.attr( "name" , "archivo" );
        $in.attr( "id" , "archivo" );

        var $inh = $( "<input>" );
        $in.attr( "type" , "hidden" );
        $in.attr( "name" , "nombreh" );
        $in.attr( "value" , "" );

        $( "#formulario" ).append( $in );
        $( "#formulario" ).append( $inh );

        $( "#okbut" ).on( "click" , function ( evt )
        {
            subirImagen( $( "#archivo" ) );
        } );

    } );

    obtener();
};
$( document ).ready( main_productos );