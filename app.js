const express = require('express')
const port = 3000

const app = express()
app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
    res.sendFile('public/views/index.html', {root: __dirname });
    });

app.get('/home', (req, res) => {
    res.sendFile('public/views/home.html', {root: __dirname});
});

app.get('/bio', (req, res) => {
    res.sendFile('public/views/bio.html', {root: __dirname});
});

app.get('/skills', (req, res) => {
    res.sendFile('public/views/skills.html', {root: __dirname});
});

app.get('/academic_projects', (req, res) =>{
    res.sendFile('public/views/academic_projects.html', {root: __dirname});
});

app.get('/personal_projects', (req, res) =>{
    res.sendFile('public/views/personal_projects.html', {root: __dirname});
});

app.get('/professional_projects', (req, res) =>{
    res.sendFile('public/views/professional_projects.html', {root: __dirname});
});

app.listen(port, function(error){
    if(error){
        console.log('Something went wrong', error)
    }else{
        console.log('Server is listening on port ', port)
    }
})