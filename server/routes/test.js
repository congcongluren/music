var express = require("express");
var router = express.Router();

var {
  User,
  Mv
} = require('../utils/model')

router.get("/user", (req, res) => {
  User.find({}, {}).then(r => {
    res.send(JSON.stringify(r))
  }).catch(err => {
    console.log(err);
  })

  // res.type('.html')
  // res.send(`<h2>helloworld</h2>`)

})
router.get("/movie",(req,res)=>{
  const query = req.query;
  console.log(query);


  Mv.find({},{}).then(r=>{
    res.send(JSON.stringify(r))
  }).catch(err=>{
    console.log(err);
  })
})

module.exports = router;