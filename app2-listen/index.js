const   express = require('express'),
        bodyParser = require('body-parser'),

        app = express(),
        port = 3000,
        ;

app.use(bodyParser.json());

app.listen(port, console.log(`I have been summoned and am listening on port ${port}.`))