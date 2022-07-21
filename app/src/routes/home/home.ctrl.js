"use strict";

const UserStorage = require("../../models/UserStorage");

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
        const id = req.body.id,
            pswd = req.body.pswd;

        const users = UserStorage.getUsers("id", "pswd");

        const response = {};
        if (users.id.includes(id)){
            const idx = users.id.indexOf(id); 
            if(users.pswd[idx] === pswd) {
              response.success = true;
              return res.json();
            }
        }
        response.success = false;
        response.msg = "로그인에 실패하였습니다.";
        return res.json(response);
    },
};

//에크마스크립트 문법 hello = hello;
module.exports = {
    output,
    process
};