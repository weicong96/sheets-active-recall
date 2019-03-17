const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const upload = multer({dest: './uploads'})

const app = express();
const uploader = require('./routes/UploadRoute');
const FileRoute = require('./routes/FileRoute');
const dbConnect = require('./mongodb');
app.use(cors());
app.get('/', (req, res)=>{
    return res.json({status: "OK"})
})
app.get('/read/:fileId', FileRoute.readQuestions);
app.post('/upload', upload.single('file'), (req, res)=>{
    return uploader.readFile(req, res)
})
app.listen(5000);
console.log('Listening on port 5000!')