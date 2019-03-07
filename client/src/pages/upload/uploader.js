import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {uploadFile} from '../../reducers/actions';
class Uploader extends Component {
  onUpload(e){
    this.props.onUpload(e.target.files[0]);
  }
  render() {
    return (
      <div>
          <input type='file' onChange={this.onUpload.bind(this)}/>
          <div>{this.props.uploaded ? "Hello" : "no"}</div>
      </div>
    );
  }
}
Uploader.propTypes = {
  uploaded: PropTypes.bool,
  onUpload: PropTypes.func.isRequired
}
const mapStateToProps=(state)=>{
  return {...state.uploadFile}
}
const mapDispatchToProps= (dispatch)=>{
  
  return {
    onUpload: (file)=> dispatch(uploadFile(file)) 
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Uploader);