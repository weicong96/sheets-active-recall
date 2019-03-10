const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const upload = multer({dest: './uploads'})

const app = express();
const {
    getToken
} = require('./api/google');
const uploader = require('./routes/upload');
app.use(cors());
app.get('/', (req, res)=>{
    return res.json({status: "OK"})
})
app.get('/read/:fileName', uploader.readFile)
app.post('/upload', upload.single('file'), (req, res)=>{
    return res.send({
        fileName: req.file.originalname,
        fileId: req.file.filename
    })
})
app.get('/token', (req, res)=>{
    getToken().then((token)=>{
        return res.send(token); 
    })
})
app.listen(5000);
console.log('Listening!')