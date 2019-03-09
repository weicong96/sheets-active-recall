import React, { Component } from 'react';
import "./reader.css";
import { connect } from 'react-redux';
class Reader extends Component{
    constructor(props){
        super(props);
        this.state = {
            fileName: props.match.params.fileName
        }
    }
    render(){
        return (
            <div>
                <h2>Uploaded_File.csv</h2>
                <div class='questions'>
                    <h4>What is the siginifance of HCI?</h4>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                    <input type='button' value='Edit'/>
                </div>
            </div>
        )
    }
}
Reader.propTypes={
    fileData: PropTypes.object
}

export default connect(()=>{
   return {
        fileData: {}
   } 
}, (dispatch)=>{
    return {

    }
})(Reader)