$(document).ready(function(){
    $.getJSON("footer.json", function(data){
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("#footer").append
                ("<tr>" +
                        "<td rowspan='4'>" + "<img src='Large%20Logo.png' alt='Logo'>" + "</td>" +
                        "<td>Please Contact Us At:</td>" +
                    "</tr>" +
                    "<tr>" +
                        "<td>" + value.phone + "</td>" +
                    "</tr>" +
                    "<tr>" +
                        "<td>" + value.email + "</td>" +
                    "</tr>" +
                    "<tr>" +
                        "<td>" + value.address + "</td>" +
                    "</tr>"

                );

            });
        });
    });
});