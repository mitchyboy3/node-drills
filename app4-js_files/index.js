const   express = require('express'),
        bodyParser = require('body-parser'),
        data = require('./data.js')

        app = express(),
        port = 3000;

app.use(bodyParser.json());

app.get('/api/get', (req, res)=>{
    res.status(200).send(data)
})

app.post('/api/add', (req, res) =>{
    data.push(req.body)
    res.status(200).send({message: `Person ${req.body.name} has been added`, person: data[data.length -1]})
})

app.listen(port, console.log(`All ears on port ${port}.`))