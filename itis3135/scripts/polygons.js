function alertUser()
{
    var num = prompt("The red hot bell pepper would like you to choose a number between 1-11 to find the corresponding polygon");
    validateEntry(num);
}

function validateEntry(_num)
{
    if(isNaN(_num)){
      alert("Sorry! Invalid number entry. Please type between 1-11!");
        alertUser();
    }
    else
    {
        number = Math.trunc(_num);
        if(number > 11 || number < 1)
        {
          alert("Sorry! Invalid number entry. Please type between 1-11!");
      alertUser();
        }
        else
        {
            whatPolygon(number);
        }
    }
}

function whatPolygon(num) {
  let answer = "";
  var val = num;

 switch (val) {
   case 1:
     answer = "a henagon";
     break;
   case 2:
     answer = "a digon";
     break;
   case 3:
     answer = "a trigon";
     break;
     case 4:
       answer = "a tetragon";
       break;
     case 5:
       answer = "a pentagon";
       break;
     case 6:
       answer = "a hexagon";
       break;
     case 7:
         answer = "a heptagon";
       break;
     case 8:
       answer = "an octagon";
       break;
     case 9:
       answer = "an enneagon";
       break;
     case 10:
       answer = "a decagon";
       break;

 }
   var message = ("A polygon with "+val+ " sides is " + answer+ ".");
 document.getElementById("polygonName").innerHTML = message;

}
