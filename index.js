
const express = require('express');
const app = express();

//Server set up
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

//get route
app.get('/',function(req,res){
    res.send('Test');

})


//start server
app.listen(3000,function(){
    console.log('server started');
})