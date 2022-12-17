$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "books.json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#books").html("");
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#books").append(

                        "<h2>" + "" + value.title + "</h2>" +
                        "<h3>" + "" + value.author + "</h3>" +
                        "<p>" + "" + value.description + "</p>"
                    );
                });
            });
        }
    });
  });
