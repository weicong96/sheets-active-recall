const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.get('/', (req, res)=>{
    return res.json({status: "OK"})
})
app.listen(8080);