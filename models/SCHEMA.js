const mongoose = require("mongoose");

const SCHEMA=mongoose.Schema;


const articles=new SCHEMA({
    name:String
    
});

const Mydata=mongoose.model("Mydata",articles);

module.exports=Mydata;