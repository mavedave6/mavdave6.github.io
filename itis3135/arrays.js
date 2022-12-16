window.onload = function () {
    document.getElementById("add_salary").onclick = addSalary;
    document.getElementById("display_results").onclick = displayResults;
    document.getElementById("display_salary").onclick = displaySalary;
    document.getElementById("person").focus();
};

var person = [];
var salaries = [];


function addSalary() {
  var enteredSalary = parseFloat(document.getElementById("salary").value);
    var enteredName = document.getElementById("person").value;

    enteredSalary = parseFloat(enteredSalary);
    person.push(enteredName);
    salaries.push(enteredSalary);

    document.getElementById("salary").value = "";
    document.getElementById("person").focus();
}

function displayResults() {
  var average = 0;
    var sum = 0;
    var personWithHighestSalary = "";
    var maxNumber = 0;

    for(i = 0; i < salaries.length; i++)
    {
        sum += salaries[i];
    }

    average = (sum / salaries.length);

    for(i = 0; i < salaries.length; i++)
    {
        if(salaries[i] > maxNumber)
        {
            maxNumber = salaries[i];
            personWithHighestSalary = person[i];
        }
}
document.getElementById("table_results").innerHTML = "The average salary is $" + average.toFixed(2) + ". " + personWithHighestSalary + " had the highest salary at $" + maxNumber.toFixed(2);
}

function displaySalary() {
  var table;
   table = "<table><tr><th>Employee</th><th>Salary</th></tr>"

   for(i = 0; i < salaries.length; i++)
   {
       table += "<tr><td>" + person[i] + "</td><td>" + salaries[i] + "</td></tr>";
   }

   table += "</table>";

   document.getElementById("table_results").innerHTML = table;
}
