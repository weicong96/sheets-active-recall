const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const upload = multer({dest: './uploads'})

const app = express();
const {
    getToken
} = require('./api/google');

app.use(cors());
app.get('/', (req, res)=>{
    return res.json({status: "OK"})
})
app.post('/upload', upload.single('file'), (req, res)=>{
    console.log(req.file);
    console.log("uploading")
    return res.send("OK")
})
app.get('/token', (req, res)=>{
    getToken().then((token)=>{
        return res.send(token); 
    })
})
app.listen(8080);