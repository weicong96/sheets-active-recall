const fs = require('fs');
const path = require('path');
const parser = require('csv-parse');
const getClient = require('../mongodb');
module.exports = {
    readFile(req, res){
        var fileName = req.params.fileName;
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
            getClient((err, client)=>{
                console.log(client, "client")
            })
            /*
            if(!req.query.page){
                req.query.page = "0";
            }
            var page = parseInt(req.query.page);
            var response = {
                totalPages: Math.floor(items.length/10),
                items: items.slice((page) * 10, (page+1)*10)
            }
            return res.send(response);
            */
        })
    }
}