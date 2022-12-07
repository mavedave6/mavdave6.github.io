function welcome()
{
    let name = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;
    let message =("Welcome to the red hot bell peppers " + name + "! We're glad you are doing " + feeling + "!");
    alert(message);
 }
 var date = new Date();

function date_time(){
  document.getElementById("day").innerHTML = ("It is " + date.toLocaleTimeString() + " on " + date.toDateString());
}
function yourAge(){
  let year = document.getElementById("birth").value;
  let age = 2022-year;
  let message =("You are "+ age + " years old!")
  alert(message);
}
function guessNumber(){
  let guess = document.getElementById("lucky-number").value;
  var message = "";
  if (guess==7) {
     message = ("Yayyyy!, you won!")
  }else {
     message = ("It's not "+ guess + ". Better luck next time!")
  }
  alert(message);
}

function rickRolled(){
  window.open(
           "https://www.youtube.com/watch?v=xvFZjo5PgG0", "_blank");
}
function survival(){
  var question = prompt("Can you survive in the wild? (y/n)");
  var y = "y";
  var y1 = "yes";
  var y2 = "Y";
  var y3 = "Yes";
  var y4 = "YES";
  if (question==y || question==y1 || question==y2 || question==y3 || question==y4) {
    alert("yes you can!")
  }else {
    alert("Believe in yourself!")
  }
}
function commentFunction() {
  alert("Thanks for leaving us a comment!")
}
