var express = require("express");
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.render("home");
});

app.post("/", function(req, res) {
    res.send(req.body);
});

app.get("/contact", function(req, res){
    res.render("contact");
});

app.get("/seller", function(req, res){
    res.render("seller/seller.ejs");
});

app.get("/seller/:type", function(req, res){
    if(req.params.type == "house"){
        res.render("seller/type/selling-house");
    }else if(req.params.type == "renovating"){
        res.render("seller/type/renovating.ejs");
    }else if(req.params.type == "mistakes"){
        res.render("seller/type/mistakes.ejs");
    }else{
        res.send("page not found");
    }  
});

app.get("/buyer/:type", function(req, res){
    if(req.params.type == "house"){
        res.render("buyer/buying-a-house");
    }else if(req.params.type == "renting-vs-buying"){
        res.render("buyer/renting-vs-buying");
    }else if(req.params.type == "the-cost-of-home-buyer"){
        res.render("buyer/the-cost-of-home-buyer");
    }else if(req.params.type == "the-elements-of-an-offer"){
        res.render("buyer/the-elements-of-an-offer");
    }else if(req.params.type == "working-with-realtor"){
        res.render("buyer/working-with-realtor");
    }else if(req.params.type == "tips-for-choosing-a-realtor"){
        res.render("buyer/tips-for-choosing-a-realtor");
    }else if(req.params.type == "save-money"){
        res.render("buyer/save-money");
    }else if(req.params.type == "why-move"){
        res.render("buyer/why-move");
    }else if(req.params.type == "moving-tips"){
        res.render("buyer/moving-tips");
    }else if(req.params.type == "home-inspection"){
        res.render("buyer/home-inspection");
    }else if(req.params.type == "market-conditions"){
        res.render("buyer/market-conditions");
    }
});

app.get("/mortgage/:type", function(req, res){
    if(req.params.type == "explanation"){
        res.render("mortgage/what-is-mortgage");
    }else if(req.params.type == "type"){
        res.render("mortgage/type-of-mortgage");
    }else if(req.params.type == "glossary"){
        res.render("mortgage/mortgage-glossary");
    }else if(req.params.type == "steps"){
        res.render("mortgage/mortgage-application-steps");
    }else if(req.params.type == "tips"){
        res.render("mortgage/mortgage-application-tips");
    }else if(req.params.type == "term"){
        res.render("mortgage/choose-mortgage-term");
    }
});





app.listen(process.env.PORT || 3000, process.env.IP, function() {
    console.log("server started");
});