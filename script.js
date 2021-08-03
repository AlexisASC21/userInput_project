let form = document.querySelector("#form");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let success = document.querySelector("#success");
let error = document.querySelector("#error");
let submitButton = document.querySelector("#submit-button");
let body = document.querySelector("body");

submitButton.onclick = function(event){
    event.preventDefault();
    console.log("hi");

    if(username.value == "Baby Yoda" && password.value == "Squirtle"){
    console.dir(success);
    success.style.display = "block";
    error.style.display = "none";
    body.style.backgroundColor = "lightblue";
    }

    else{
    console.dir(error);
    error.style.display = "block";
    success.style.display = "none";
    body.style.backgroundColor = "rgb(50, 50, 50)";
    }

    username.value ="";
    password.value ="";

}