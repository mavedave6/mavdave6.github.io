function search() {
      // Prevent the form from submitting
      event.preventDefault();

      // Get the search query from the form
      var query = document.getElementById("query").value;

      // Set up an AJAX request to the server
      $.ajax({
        type: "get",
        url: "books.json",
        beforeSend: function() {
          $("#results").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
          alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
          $("#results").html("");
          $.each(data.books, function(key, value) {
            if (value.title.toLowerCase().includes(query.toLowerCase()) || value.author.toLowerCase().includes(query.toLowerCase())) {
              $("#results").append(
                "<img src='" + value.image + "' alt='Image of "+value.title +"'></img>" +
                "<h2>" + "" + value.title + "</h2>" +
                "<h3>" + "" + value.author + "</h3>" +
                "<p>" + "" + value.description + "</p>"
              );
            }
          });
        }
      });
    }
