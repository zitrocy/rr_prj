"use strict";

const home = (req, res) => {
    res.render("home/index");
};
//function과 같다.
const login = (req, res) => {
    res.render("home/login");
};
//에크마스크립트 문법 hello = hello;
module.exports = {
    home,
    login,
};