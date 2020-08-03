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

module.exports= router;