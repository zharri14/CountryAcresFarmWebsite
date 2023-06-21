$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "ProductTable.json",
        beforeSend: function() {
            $("#productList").html("<tr>" +
            "<th>Description</th>" + "<th>Price</th>" +
            "</tr>");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#productList").append
                    ("<tr>" +
                        "<td>" + value.name + "</td>" +
                        "<td>" + value.price + "</td>" +
                        "</tr>"
                    );
                });
            });
        }
    });
});