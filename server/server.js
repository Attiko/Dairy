const express = require("express")

const mongoose = require('mongoose');
const app = express()
var cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// creating connection to mongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/dairyDB');

const dairySchema = {
  title: String,
  body: String
}
const Dairy = mongoose.model('dairy', dairySchema);
// Ending of the connection


//send request over to react
app.get("/api", (req,res)=>{
  res.json({"users": ["userOne", "userTwo", "userThree", "userFour","userFive"]})
  })

  app.post('/home', (req, res) =>{
    req.body.title;
    req.body.content;

  })

//send default value over to mongo database
// const dairyTest = new Dairy({
//   title: "I'm feeling nervous",
//   body: "I'm feeling this way because of my technical interviews next week, im so scared"
// })
// dairyTest.save(()=>(
//   console.log("log has been saved")
// ))
// end of sending a hardcoded data

//Making a post request from react to the database
app.post((req, res)=>{

})








app.listen(4000, (req, res)=>{
console.log("API listening at port 4000");
})