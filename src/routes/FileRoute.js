const db = require('../mongodb');
const PAGE_SIZE = 10;
module.exports = {
    readQuestions(req, res){
        var pageNum = 0;
        if(req.query.page){
            pageNum = parseInt(req.query.page);
        }
        var fileId = req.params.fileId;
        db((err, client)=>{
            client.collection('notes')
                .findOne({file: fileId}, (err, result)=>{
                    return res.send(JSON.stringify(result));
                })
        })
    }
}