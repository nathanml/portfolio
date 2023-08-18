const http = require('http')
const express = require('express')
const port = 3000

const app = express()

app.get('/', (req, res) => {
    res.send('index.html');
    });

app.listen(port, function(error){
    if(error){
        console.log('Something went wrong', error)
    }else{
        console.log('Server is listening on port ', port)
    }
})