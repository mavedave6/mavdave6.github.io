$(document).ready(function() {
  $.ajax({
    type: "get",
    url: "team.json",
    beforeSend: function() {
        $("#team").html("Loading...");
    },
    timeout: 10000,
    error: function(xhr, status, error) {
        alert("Error: " + xhr.status + " - " + error);
    },
    dataType: "json",
    success: function(data) {
        $("#team").html("");
        for (let i = 0; i < data.management.length; i++) {
            let management = data.management[i];
            $("#team").append(
                "<h3>" + management.name + "</h3>" +
                management.title + "<br>" +
                management.bio + "<br>"
            );
        }
    }
});

});
