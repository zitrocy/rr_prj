"use strict";

// 모듈
const express = require("express");
const app = express();
const PORT = 3000;

// 라우팅
const home = require("./routes/home");
app.use("/", home); // use -> 미들웨어를 등록해주는 메서드

// 앱세팅
app.set("views", "./views");
//view engine 세팅
app.set("view engine", "ejs");

module.exports = app;