var main = function ()
{
    "use strict";
    Materialize.updateTextFields();
    $('.brand-logo').text("• Admin • Roles");

    $('input[id=nombrerol]').change(function ( evt )
    {

       if($("#nombrerol").text()!="")
       {
           $("#okbut").removeClass("disabled");
       }
       else
       {
           $("#okbut").addClass("disabled");
       }
    });
};
$(document).ready(main);