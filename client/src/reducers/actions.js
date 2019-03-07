import axios from 'axios';
export const UPLOAD_FILE = 'UPLOAD_FILE'
export const UPLOAD_FILE_FULFILLED = 'UPLOAD_FILE_FULFILLED'
export const UPLOAD_FILE_REJECTED = 'UPLOAD_FILE_REJECTED'

export function uploadFile(file){
    return {
        type: UPLOAD_FILE,
        payload: axios.get("http://localhost:8080/")
    }

    /*
    return function(dispatch){
        dispatch({
            type: UPLOAD_FILE,
            uploaded: false
        });
        var data = new FormData();
        data.append("file", file);
        return fetch(`http://localhost:8080/upload`,{
            method: 'POST',
            body: data,
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin':'*'
            }
        }).then((res)=>{
            console.log('done');
            return dispatch({
                type: UPLOAD_FILE,
                uploaded: true
            })
        })
    }*/
}