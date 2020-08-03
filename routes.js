var express = require("express");
var router = express.Router();

router.get("/", function (rep,res){
   // console.log("hello I am on the start page");
    res.render("index");
    
    
});
router.get("/level1", function (rep,res){
    //console.log("hello I am on the start page");
    res.render("level1");
    
    
});
router.get("/mary", function (rep,res){
    //console.log("hello I am on the start page");
    res.render("mary");
    
    
});
router.get("/gladys", function (rep,res){
    //console.log("hello I am on the start page");
    res.render("gladys");
    
    
});
router.get("/ellen", function (rep,res){
    //console.log("hello I am on the start page");
    res.render("ellen");
    
    
});

module.exports= router;