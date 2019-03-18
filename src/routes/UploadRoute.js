const fs = require('fs');
const path = require('path');
const parser = require('csv-parse');
const db = require('../mongodb');
const _ = require('lodash');
module.exports = {
    readFile(req, res){
        var fileName = req.file.filename;
        var file = fs.readFileSync(path.resolve('uploads', fileName)).toString();
        parser(file,{},(err, parsed)=>{
            var items = parsed.map((parsedItem)=>{
                var item = {
                    question: parsedItem[0],
                    answer: parsedItem[1].split("\\").map((ans)=> ans.trim().toLowerCase()),
                    topic: parsedItem[2]
                }
                if(parsedItem[3].length != 0){
                    item['hint'] = parsedItem[3];
                }
                return item;
            })
            db((err, client)=>{
                var grouped = _.groupBy(items, 'topic');
                var modules = Object.keys(grouped).map((key)=>{
                    return {
                        topic: key,
                        username: req.body.username
                    }
                });
                /*
                client.collection('notes').update({
                    
                })*/
                /*
                client.collection('notes').insertOne({
                    file: fileName,
                    questions: items,
                    name: req.file.originalname
                }, (err, result)=>{
                    if(err){
                       res.status(400);
                       return res.send(JSON.stringify(err)); 
                    }
                    return res.send({
                        questions: items.length,
                        fileName: req.file.originalname,
                        fileId: req.file.filename
                    });
                })*/
            })
        })
    }
}