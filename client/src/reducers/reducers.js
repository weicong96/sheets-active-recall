import { combineReducers } from 'redux'
import {
    READ_FILE,
    UPLOAD_FILE_FULFILLED,
    UPLOAD_FILE_REJECTED
} from './actions';
function readFile(state={}, action){
    switch(action.type){
        case READ_FILE:
            console.log(action);
            return state;
        default:
            return state;
    }
}
function uploadFile(state={}, action){
    switch(action.type){
        case UPLOAD_FILE_FULFILLED:
            return {
                ...state,
                fileName: action.payload.data.fileName
            }
        case UPLOAD_FILE_REJECTED:
            return {...state}
        default: 
            return state;
    }
}  
export const rootReducer = combineReducers({ 
    uploadFile: uploadFile
})
