document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    document.getElementById("nameError").innerHTML="";
    document.getElementById("emailError").innerHTML="";
    document.getElementById("messageError").innerHTML="";
    document.getElementById("success").innerHTML="";

    let valid=true;

    if(name==""){
        document.getElementById("nameError").innerHTML="Name is required";
        valid=false;
    }

    if(email==""){
        document.getElementById("emailError").innerHTML="Email is required";
        valid=false;
    }
    else if(!emailPattern.test(email)){
        document.getElementById("emailError").innerHTML="Enter a valid email";
        valid=false;
    }

    if(message==""){
        document.getElementById("messageError").innerHTML="Message is required";
        valid=false;
    }

    if(valid){
        document.getElementById("success").innerHTML="Form submitted successfully!";
        document.getElementById("contactForm").reset();
    }

});