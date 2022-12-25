 let email = document.getElementById("email");
 let password = document.getElementById("password");
 let button = document.getElementById("myBtn");

 function checkvalidation(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if(email.value !="" && password.value!="") {
        alert("All good to go!");
    }
    else{
        alert("please fill in all fields")
    }
 }

 button.onchange = checkvalidation;