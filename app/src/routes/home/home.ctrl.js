"use strict";

const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    //function과 같다.
    login : (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login : (req, res) => {
        console.log(req.body);
    }
}

//에크마스크립트 문법 hello = hello;
module.exports = {
    output,
    process
};