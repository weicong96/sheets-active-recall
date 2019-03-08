
const fs = require('fs');
const path = require('path');
module.exports = {
    readFile(req, res){
        var fileName = req.params.fileName;
        var file = fs.readFileSync(path.resolve('uploads', fileName)).toString();
        console.log(file);
    }
}