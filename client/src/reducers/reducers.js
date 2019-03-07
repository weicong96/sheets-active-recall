import { combineReducers } from 'redux'
import {
    UPLOAD_FILE,
    UPLOAD_FILE_FULFILLED,
    UPLOAD_FILE_REJECTED
} from './actions';
const initialState = {
    loading: false
};
function uploadFile(state=initialState, action){
    switch(action.type){
        case UPLOAD_FILE_FULFILLED:
        case UPLOAD_FILE_REJECTED:
            return {...state, loading: false}
        default: 
            return state;
    }
}  
export const rootReducer = combineReducers({ 
    uploadFile: uploadFile
})
