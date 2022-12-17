
    var search = new XMLHttpRequest();
    search.open('Get', 'https://mavedave6.github.io/itis3135/project/books.json');
    search.onload = function(){
      var myData = JSON.parse(search.responseText);
      console.log(myData[2]);
    };
    search.send();
