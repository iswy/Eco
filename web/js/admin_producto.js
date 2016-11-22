var ids = [];

var obtener = function()
{
    $.get("/Binas/GetProducts", function(data, status)
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
            $tr.append( $("<td>").text(row.productid) );
            $tr.append( $("<td>").text(row.code) );
            $tr.append( $("<td>").text(row.productname) );
            $tr.append( $("<td>").text(row.brand) );
            $tr.append( $("<td>").text(row.purchprice) );
            $tr.append( $("<td>").text(row.stock) );
            $tr.append( $("<td>").text(row.salepricemin) );
            $tr.append( $("<td>").text(row.reorderpoint) );
            $tr.append( $("<td>").text(row.currency) );
            $tr.append( $("<td>").text(row.categoryid) );
            $tr.append( $("<td>").text(row.salepricemay) );

            $tbody.append($tr);
        });

        $table.append($tbody);
        $("#tabla").append($table);

    });
};

var main_productos = function ()
{
    "use strict";

    ids.push("codigo");
    ids.push("producto");
    ids.push("marca");
    ids.push("precio_ad");
    ids.push("stock");
    ids.push("precio");
    ids.push("reorden");
    ids.push("moneda");
    ids.push("categoria");
    ids.push("precio_may");

    Materialize.updateTextFields();
    $('.brand-logo').text("• Admin • Producto");

    $("input[id=precio_ad]").change( function (assddd)
    {
        var n = parseInt( $("#precio_ad").val());
        if( !isNaN(n) )
        {
            $( "#precio" ).val(n*2);
            $("label[for=precio]").addClass("active");

            $("#precio_may").val(n*1.5);
            $("label[for=precio_may]").addClass("active");

            $( "#reorden" ).val("22");
            $("label[for=reorden]").addClass("active");

            $("#stock").val(30);
            $("label[for=stock]").addClass("active");

            $("#moneda").val("MXN");
            $("label[for=moneda]").addClass("active");

            $("#categoria").val("AutoCat");
            $("label[for=categoria]").addClass("active");

            $("#okbut").removeClass("disabled");

            Materialize.updateTextFields();
        }
        else
        {
            //$("#precio_ad").val("100");
            Materialize.updateTextFields();
        }

    });

    obtener();
};
$(document).ready(main_productos);