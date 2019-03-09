import axios from 'axios';
export const UPLOAD_FILE = 'UPLOAD_FILE'
export const UPLOAD_FILE_FULFILLED = 'UPLOAD_FILE_FULFILLED'
export const UPLOAD_FILE_REJECTED = 'UPLOAD_FILE_REJECTED'
export const READ_FILE = 'READ_FILE'

export const API_ADDR = 'http://localhost:8080'
export function readFile(fileName){
    return {
        type: READ_FILE,
        payload: axios.get(`${API_ADDR}/read/${fileName}`)
    }
}