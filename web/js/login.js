function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++)
    {
        var c = ca[i];
        while (c.charAt(0)==' ')
        {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0)
        {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}


var main = function ()
{
    "use strict";

    $('.brand-logo').text("Login Login");

    // <materialize>
    $('select').material_select();
    // </materialize>

    $('#sseell').on("change",function ( evt )
    {
        $("#loginbut").removeClass("disabled");
    });

    $("#loginbut").on("click",function ( evt )
    {
        var querol="admin";
        var valor = $("#sseell option:selected").val();

        if(valor>3)
            querol="cliente";

        document.cookie = "nombre=" + $("#sseell option:selected").text()+";";
        document.cookie = "rol=" + querol+";";

        if(querol=="admin")
        {
            $("#content_content").load("admin_menu.html");
            $("#header_header").load("header_admin.html");
        }
        if(querol=="cliente")
        {
            $("#content_content").load("buyer_principal.html");
            $("#header_header").load("header_buyer.html");
        }


    });
};

$(document).ready(main);
