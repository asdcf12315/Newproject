var mongo = require("mongodb");
var host = "localhost";
var port="27017";
var server=new mongo.Server(host,port,{auto_reconnect:true});
var db=new mongo.Db("t66y",server,{safe:true});


module.exports = db;
