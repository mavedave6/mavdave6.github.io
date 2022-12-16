
var currentDescription = null;
var desc = document.getElementById("desc");

function scrollToTop() {
    // Scroll the page to the top
    window.scrollTo(0, 0);
}

window.addEventListener("beforeunload", scrollToTop);

function goToSection(elementId) {
    // Get the element with the specified ID
    var element = document.getElementById(elementId);

    // Scroll the page so that the element is at the top
    window.scrollTo(0, element.offsetTop);
}

function showDescription(bookId) {
  goToSection("desc");
    var description = document.getElementById(bookId);
    if (currentDescription !== null) {
                currentDescription.style.display = "none";
        }
        description.style.display = "block";


                 // Update the currentDescription variable to keep track of the visible description
                 currentDescription = description;


    console.log(bookId);
  }
