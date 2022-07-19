"use strict";

// 모듈
const express = require("express");
const app = express();


// 라우팅
const home = require("./src/routes/home");
app.use(express.static('${__dirname}/src/public'));
//정적 경로 추가 / public/js/home/login.js를 정적
app.use("/", home); // use -> 미들웨어를 등록해주는 메서드

// 앱세팅
app.set("views", "./src/views");
//view engine 세팅
app.set("view engine", "ejs");

module.exports = app;