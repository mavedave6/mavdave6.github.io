var books = {
  "items": [
    {
      "id": "1",
      "volumeInfo": {
        "title": "The Great Gatsby",
        "authors": ["F. Scott Fitzgerald"],
        "description": "The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted 'gin was the national drink and sex the national obsession,' it is an exquisitely crafted tale of America in the 1920s.",
        "imageLinks": {
          "smallThumbnail": "https://books.google.com/books/content?id=GG_kCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        }
      }
    },
    {
      "id": "2",
      "volumeInfo": {
        "title": "Pride and Prejudice",
        "authors": ["Jane Austen"],
        "description": "When Elizabeth Bennet first meets eligible bachelor Fitzwilliam Darcy, she thinks him arrogant and conceited; he is indifferent to her good looks and lively mind. When she later discovers that Darcy has involved himself in the troubled relationship between his friend Bingley and her beloved sister Jane, she is determined to dislike him more than ever. In the sparkling comedy of manners that follows, Jane Austen shows the folly of judging by first impressions and superbly evokes the friendships, gossip and snobberies of provincial middle-class life.",
        "imageLinks": {
          "smallThumbnail": "https://books.google.com/books/content?id=GG_kCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        }
      }
    },
    {
      "id": "3",
      "volumeInfo": {
        "title": "To Kill a Mockingbird",
        "authors": ["Harper Lee"],
        "description": "One of the best-loved stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father—a crusading local lawyer—risks everything to defend a black man unjustly accused of a terrible crime.",
        "imageLinks": {
          "smallThumbnail": "https://books.google.com/books/content?id=GG_kCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        }
      }
    }
  ]
};
$(document).ready(function() {
  $('#book-search-form').submit(function(event) {
    event.preventDefault();
    var searchTerm = $('#search-term').val().toLowerCase();

    var results = books.items.filter(function(book) {
      return book.volumeInfo.title.toLowerCase().includes(searchTerm) || book.volumeInfo.authors.join(', ').toLowerCase().includes(searchTerm);
    });

    results = results.map(function(item) {
      return '<div class="book-result" data-id="' + item.id + '">' + item.volumeInfo.title + ' by ' + item.volumeInfo.authors.join(', ') + '</div>';
    });
    $('#search-results').html(results.join('<br>'));
  });

  $(document).on('click', '.book-result', function() {
    var bookId = $(this).data('id');
    var book = books.items.find(function(b) { return b.id === bookId; });

    var html = '<h2>' + book.volumeInfo.title + '</h2>';
    html += '<p>By ' + book.volumeInfo.authors.join(', ') + '</p>';
    html += '<p>' + book.volumeInfo.description + '</p>';
    html += '<img src="' + book.volumeInfo.imageLinks.smallThumbnail + '">';
    $('#book-details').html(html);
  });
});
