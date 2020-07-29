var express = require('express');
var app = express();
const bdp=require('body-parser');

const prod=require('./api/routes/Send.js');

var connectDB = require('./backend/models/Connection');

connectDB();


app.use(bdp.urlencoded({ extended: false }))

app.get('/',(req,res)=>{

    res.sendFile(__dirname + '/StudentSign.html');
  

});

// app.post('/Send', function (req, res) {
//   res.send(JSON.stringify(req.body)); 
//   console.log(req.body)
// });


app.use("/Send",prod);


    app.post('/tutorthankyou', (req, res) => {
        console.log(req.body);
      });

    //   app.post('/StudentAlert', (req, res) => {
    //     console.log(req.body)
    //   });

    // app.post('/Send', function(req, res) {
    //     console.log("BODY"+req.body); //Output=> like { searchid: 'Array of checked checkbox' }
    //     console.log("SEARCH"+req.body.searchid); // to get array of checked checkbox
    
    //    res.sendFile(__dirname + '/test.html')
    //     //res.send(JSON.stringify(req.body))
    //     console.log(req.body)
    //   });
   
    

app.listen(3005, function() {
    console.log('listening on 3000')
  });


  module.exports=app;