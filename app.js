const express = require('express')
const port = 3000

const app = express()
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    });

app.listen(port, function(error){
    if(error){
        console.log('Something went wrong', error)
    }else{
        console.log('Server is listening on port ', port)
    }
})
