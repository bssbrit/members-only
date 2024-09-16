const express = require("express");
const app = express();
const path = require("node:path");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");



app.get("/", (req,res) => {
    res.redirect("messages")
})
app.get("/messages", (req,res)=>{
    res.render("index.ejs")
})
app.get("/sign-up", (req,res) => {
    res.render("sign-up")
})
app.get('/join', (req,res) => {
    res.render("join")
})
//app.use("/message")


module.exports = app