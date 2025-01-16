const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
app.use(express.urlencoded({extended: true}));
const Mydata=require("./models/SCHEMA");

//get method for get the page route 
app.get("/", (req, res) => {
  res.sendFile("/views/home.html", { root: __dirname });
});

//post method for add data in mongodb collection route
app.post("/" ,(req,res)=>{
  const mydata=new Mydata({
    name:req.body.name
  })
  mydata.save().then(()=>{
    res.redirect("/")
  }).catch((err)=>{
    console.log(err)
  })
});



mongoose
  .connect("mongodb://127.0.0.1:27017/Myproject") //MongoDb connection link
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
