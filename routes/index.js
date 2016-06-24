var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET home page. */
var lists = [];
db.open(function(err,db){
  db.collection("link",function(err,coll){
    if(err){
      throw err;
    }else{
     coll.find({}).toArray(function(err,docs){
       if(err)throw err;
       else{
         lists = docs;
         //console.log(docs);
         db.close();

       }
     });
    }
  });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,lists:lists});
});

module.exports = router;
