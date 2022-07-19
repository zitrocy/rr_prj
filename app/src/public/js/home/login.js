"use strict";

const id = document.querySelector("#id"),
    pswd = document.querySelector("pswd"),
    loginBtn = document.querySelector("button");

    console.log(id);
    console.log("hello");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        pswd: pswd.value,
    }    
    console.log(req);
}