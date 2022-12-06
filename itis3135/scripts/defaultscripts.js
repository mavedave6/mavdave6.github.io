function welcome()
{
    let name = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;
    let fullWelcome = "Gustafson Designs welcomes you, " + name + "! We're glad that you are " + feeling + "!";
    document.getElementById("welcomeOutput").innerHTML = fullWelcome;
 }
