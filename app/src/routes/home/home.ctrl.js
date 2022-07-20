"use strict";

const users = {
    id: ["chiyoung", "minhee", "abc"],
    pswd: ["1234", "2345", "3456"]
}

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


        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pswd[idx]== pswd) {
                return res.json({
                    success : true,
                });
            }
          }
        return res.json({
            success: false,
            msg: "로그인에 실패하였습니다.",
        });
    },
};

//에크마스크립트 문법 hello = hello;
module.exports = {
    output,
    process
};