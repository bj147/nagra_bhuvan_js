document.getElementById("submit").addEventListener("click", function(event) {
    var name = document.getElementById("name").value;
    var collegeName = document.getElementById("clgname").value;
    var cgpa = document.getElementById("cgpa").value;
    var dob = document.getElementById("dob").value;
    var branch = document.getElementById("branch").value;
    var newWindow = window.open("", "_self");
    var finalval = " <h1> Thanks  " + name + "</h1>";
    finalval += "<link rel='stylesheet' href='css/stylesheet.css'>";
    finalval += "Please verify the details";
    finalval += "<p><strong>Name:</strong> " + name + "</p>";
    finalval += "<p><strong>College Name:</strong> " + collegeName + "</p>";
    finalval += "<p><strong>CGPA:</strong> " + cgpa + "</p>";
    finalval += "<p><strong>Date of Birth:</strong> " + dob + "</p>";
    finalval += "<p><strong>Branch:</strong> " + branch + "</p>";
    newWindow.document.write(finalval);


});