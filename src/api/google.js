const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const bluebird = require('bluebird');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

module.exports={
    getToken(){
        var readFilePromise = bluebird.promisify(fs.readFile);
        return readFilePromise('credentials.json').then((token)=>{
            return token.toString()
        })
    }
}