function send_code()
{
    Gmail = document.getElementById("Gmail").value;
    localStorage.setItem("Gmail", Gmail);
    window.location = "done.html";
    
    if(Gmail == ""){
        window.alert("Please type your Email");
        window.location = "forgetpassword.html";
    }
}
