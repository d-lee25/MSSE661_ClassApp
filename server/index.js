const express = require('express');
const app = express();


//app.use - serve files 
app.use(express.static('public'));

//Telling program to where to find css files 
app.use('/css', express.static(__dirname + '/public/css'));

app.listen(3000, function(){
    console.log('Server started at http: //localhost:%s', 3000);
});

