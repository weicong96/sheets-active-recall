const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {
    getToken
} = require('./api/google');

app.get('/', (req, res)=>{
    return res.json({status: "OK"})
})
app.get('/token2', (req, res)=>{
    getToken().then((token)=>{
        return res.send(token); 
    })
})
app.listen(8080);