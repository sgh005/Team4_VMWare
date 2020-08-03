var express = require("express");
var router = express.Router();

router.get("/", function (rep,res){
   // console.log("hello I am on the start page");
    res.render("index");
    //res.render("puzzler");
    
    
});
router.get("/level1", function (rep,res){
    //console.log("hello I am on the start page");
    res.render("level1");
    
    
});
router.get("/game_map", function (rep,res){
    //console.log("hello I am on the start page");
    res.render("game_map");
    
    
});
router.get("/meet_team", function (rep,res){
    //console.log("hello I am on the start page");
    res.render("meet_team");
    
    
});
router.get("/mary", function (rep,res){
    //console.log("hello I am on the start page");
    res.render("mary");
    
    
});

module.exports= router;