'use strict';


var express = require('express');
var moment = require('moment');
var app = express();



app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    })


app.route('/:dateStamp')
    .get(function(req, res) {
  
      var dateStamp = req.params.dateStamp;
  
      var unixDate = 0;
       
      var naturalDate; 
  
      
  
      if(dateStamp > 0){
        
        var date = new Date(dateStamp*1000);
        
        unixDate = date.getTime()/1000;
        
        naturalDate = moment(date).format('LL');
      
      }else if(!isNaN(Date.parse(dateStamp))){
        
        naturalDate = dateStamp;
        
        unixDate = Date.parse(dateStamp)/1000;
        
      }else{
        naturalDate = null;
        
        unixDate = null;
      }
      
      
  
      res.json({'unix': unixDate,'natural':naturalDate});
  
    })


app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});



