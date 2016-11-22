var thisnombre = "Usuarios";

var estructura =
    [
        { nombre: "iidd" , fnombre: "Introduce el id del usuario" , tipo: "text" , necesario: "si" } ,
        { nombre: "nombre" , fnombre: "Introduce el nombre del usuario (NECESARIO)" , tipo: "text" , necesario: "si" } ,
        { nombre: "contrasena" , fnombre: "Introduce la contraseña usuario" , tipo: "text" , necesario: "no" } ,
        { nombre: "telefono" , fnombre: "Introduce el número de teléfono del usuario" , tipo: "text" , necesario: "no" } ,
        { nombre: "colonia" , fnombre: "Introduce en nombre de la colonia" , tipo: "text" , necesario: "no" } ,
        { nombre: "cp" , fnombre: "Introduce el código postal del usuario" , tipo: "text" , necesario: "no" } ,
        { nombre: "ciudad" , fnombre: "Introduce la ciudad del usuario" , tipo: "text" , necesario: "no" } ,
        { nombre: "pais" , fnombre: "Introduce el el pais del usuario" , tipo: "text" , necesario: "no" } ,
        { nombre: "estado" , fnombre: "Introduce el estado del usuario" , tipo: "text" , necesario: "no" } ,
        { nombre: "region" , fnombre: "Introduce la region del usuario" , tipo: "text" , necesario: "no" } ,
        { nombre: "calle" , fnombre: "Introduce la calle del usuario" , tipo: "text" , necesario: "no" } ,
        { nombre: "correo" , fnombre: "Introduce el correo del usuario (NECEARIO)" , tipo: "text" , necesario: "si" } ,
        { nombre: "nocasa" , fnombre: "Introduce el número de casa del usuario" , tipo: "text" , necesario: "no" } ,
        { nombre: "foto" , fnombre: "Introduce la foto del usuario" , tipo: "text" , necesario: "no" } ,
        { nombre: "telcel" , fnombre: "Introduce el teléfono celular del usuario" , tipo: "text" , necesario: "no" } ,
        { nombre: "idcompany" , fnombre: "Selecciona la compañia del usuario" , tipo: "sel" , necesario: "no" } ,
        { nombre: "idrol" , fnombre: "Selecciona el Rol del usuario" , tipo: "sel" , necesario: "no" } ,
        { nombre: "genero" , fnombre: "selecciona el género del usuario" , tipo: "gen" , necesario: "no" } ,
        { nombre: "operaciones" , fnombre: "Operaciones del usuario" , tipo: "text" , necesario: "no" }
    ];

var dev = false;

var $formu = $( "<form>" ).addClass( "col" ).addClass( "s12" );

var dib_text = function ( obj )
{
    if ( dev )
        console.log( "div text : " + obj.nombre );

    var $tt_row = $( "<div>" ).addClass( "row" );
    var $ttx = $( "<div>" ).addClass( "input-field" ).addClass( "col" ).addClass( "s12" );

    var $inin = $( "<input>" );
    $inin.attr( "id" , obj.nombre );
    $inin.attr( "type" , "text" );
    $inin.addClass( "validate" );

    var $lala = $( "<label>" );
    $lala.attr( "for" , obj.nombre );
    $lala.text( obj.fnombre );

    if ( obj.necesario == "si" )
    {
        var $xxii = $( "<i>" );
        $xxii.addClass( "material-icons" );
        $xxii.addClass( "prefix" );
        $xxii.text( "mode_edit" );

        $tt_row.append( $xxii );

    }

    $ttx.append( $lala );
    $ttx.append( $inin );
    $tt_row.append( $ttx );

    $formu.append( $tt_row );
};

var dib_opt = function ( obj )
{
    console.log( "div_opt" );

    var $a = $( "<div>" ).addClass( "row" );

    var $tt_row = $( "<div>" );
    $tt_row.addClass( "input-field" );
    $tt_row.addClass( "col" );
    $tt_row.addClass( "s12" );

    var $selectselect = $( '<select>' );
    $selectselect.attr( "id" , obj.nombre );

    $selectselect.append( $( "<option value=\"\" disabled selected>" ).text( obj.fnombre ) );

    $selectselect.append( $( "<option>" ).attr( "value" , "0" ).text( "cero" ) );
    $selectselect.append( $( "<option>" ).attr( "value" , "1" ).text( "uno" ) );
    $selectselect.append( $( "<option>" ).attr( "value" , "2" ).text( "dos" ) );
    $selectselect.append( $( "<option>" ).attr( "value" , "3" ).text( "tres" ) );
    $selectselect.append( $( "<option>" ).attr( "value" , "4" ).text( "cuatro" ) );
    $selectselect.append( $( "<option>" ).attr( "value" , "5" ).text( "cincos" ) );

    if ( obj.necesario == "si" )
    {
        var $xxii = $( "<i>" );
        $xxii.addClass( "material-icons" );
        $xxii.addClass( "prefix" );
        $xxii.text( "mode_edit" );

        $tt_row.append( $xxii );

    }

    $tt_row.append( $selectselect );

    $lab = $( "<label>" );
    $lab.text( obj.fnombre );

    $tt_row.append( $lab );

    $formu.append( $a.append( $tt_row ) );

};

var dib_gen = function ( obj )
{
    var $a = $( "<div>" ).addClass( "row" );

    var $tt_row = $( "<div>" );
    $tt_row.addClass( "input-field" );
    $tt_row.addClass( "col" );
    $tt_row.addClass( "s12" );

    var $selectselect = $( '<select>' );
    $selectselect.attr( "id" , obj.nombre );

    $selectselect.append( $( "<option value=\"\" disabled selected>" ).text( obj.fnombre ) );

    $selectselect.append( $( "<option>" ).attr( "value" , "m" ).text( "masculino" ) );
    $selectselect.append( $( "<option>" ).attr( "value" , "f" ).text( "femenino" ) );

    if ( obj.necesario == "si" )
    {
        var $xxii = $( "<i>" );
        $xxii.addClass( "material-icons" );
        $xxii.addClass( "prefix" );
        $xxii.text( "mode_edit" );

        $tt_row.append( $xxii );

    }

    $tt_row.append( $selectselect );

    $lab = $( "<label>" );
    $lab.text( obj.fnombre );

    $tt_row.append( $lab );

    $formu.append( $a.append( $tt_row ) );
};

var formular = function ()
{
    if ( dev )
        console.log( "formular" );

    estructura.forEach( function ( objeto )
    {
        if ( objeto.tipo == "text" )
            dib_text( objeto );

        if ( objeto.tipo == "sel" )
            dib_opt( objeto );

        if ( objeto.tipo == "gen" )
            dib_gen( objeto );
    } );
    Materialize.updateTextFields();
};


var validar = function ()
{/*
 for ( var i = 0; i < 10; i++ )
 $( "#butbutbut" ).removeClass( "disabled" );
 
 estructura.forEach( function ( objeto )
 {
 if ( objeto.necesario === "si" )
 if ( objeto.tipo === "text" )
 if ( $( "input[id=" + objeto.nombre + "]" ).val() === "" )
 {
 $( "#butbutbut" ).addClass( "disabled" );
 return;
 }
 } );
 */
};

var nuevo = function ()
{

};

var obtener = function()
{
    $.get("/Binas/GetUsuarios", function(data, status)
    {
        $dat = data;

        $("#tabla").append("<br>");
        $("#tabla").append("<br>");
        $("#tabla").append("<br>");
        $("#tabla").append("<br>");
        $("#tabla").append("<br>");

        var $table = $("<table>");
        $table.addClass("striped");
        $table.addClass("responsive-table");

        var $tbody=$("<tbody>");

        $.each( $.parseJSON( data.msg ) , function ( i , row )
        {
            var $tr = $("<tr>");
            $tr.append( $("<td>").text(row.userid) );
            $tr.append( $("<td>").text(row.username) );
            $tr.append( $("<td>").text(row.password) );
            $tr.append( $("<td>").text(row.phone) );
            $tr.append( $("<td>").text(row.neigborhood) );
            $tr.append( $("<td>").text(row.zipcode) );
            $tr.append( $("<td>").text(row.city) );
            $tr.append( $("<td>").text(row.country) );
            $tr.append( $("<td>").text(row.state) );
            $tr.append( $("<td>").text(row.region) );
            $tr.append( $("<td>").text(row.street) );
            $tr.append( $("<td>").text(row.email) );
            $tr.append( $("<td>").text(row.streetnumber) );
            $tr.append( $("<td>").text(row.photo) );
            $tr.append( $("<td>").text(row.cellphone) );
            $tr.append( $("<td>").text(row.companyid) );
            $tr.append( $("<td>").text(row.roleid) );
            $tr.append( $("<td>").text(row.gender) );

            $tbody.append($tr);
        });

        $table.append($tbody);
        $("#tabla").append($table);
        
    });
};

var main_usuarios = function ()
{
    "use strict";

    var buttonmaker = function ()
    {
        var $butt = $( "<a>" );
        $butt.text( "Guardar" );
        $butt.addClass( "waves-effect" );
        $butt.addClass( "waves-light" );
        $butt.addClass( "btn-large" );
        //$butt.addClass( "disabled" );
        $butt.attr( "id" , "butbutbut" );

        $butt.on( "click" , function ( evt )
        {
            nuevo();
        } );

        $( "#formul" ).append( $butt );
    };

    Materialize.updateTextFields();

    $( '.brand-logo' ).text( "• Admin • " + thisnombre );

    var $divrow = $( "<div>" ).addClass( "row" );

    formular();

    $divrow.append( $formu );

    $( "#formul" ).append( $formu );

    $( 'select' ).material_select();

    buttonmaker();

    $( "input" ).change( function ( )
    {
        validar();
    } );

    obtener();

};
$( document ).ready( main_usuarios );