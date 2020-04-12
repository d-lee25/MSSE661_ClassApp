const express = require('express');
const app = express();

const port = process.env.PORT || 4000;
//app.use - serve files 
app.use(express.static('public'));

//Telling program to where to find css files 
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/src'));

app.listen(port, function(){
    console.log('Server started at http: //localhost:%s', port);
});

