import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import axios from 'axios';

class Uploader extends Component {
  constructor(props){
    super(props);
    this.state = { file: null};  
  }
  onUpload(e){
    this.setState({
      file: e.target.files[0]
    })
  }
  onSubmit(e){
    var formData = new FormData();
    formData.append('file', this.state.file);
    axios.post(`http://localhost:8080/upload`, formData, {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
    }).then((res)=>{
      this.props.onUploaded(res.data);
    });
  }
  render() {
    return (
      <div>
          <input type='file' onChange={this.onUpload.bind(this)}/>
          <p>{this.state.file != null ? "File Uploaded: "+this.state.file.name : ""}</p>
          <input type='button' value='Process' onClick={this.onSubmit.bind(this)}/>
      </div>
    );
  }
}
Uploader.propTypes = {
  onUploaded: PropTypes.func.isRequired
}
const mapStateToProps=(state)=>{
  return {}
}
const mapDispatchToProps= (dispatch, ownProps)=>{
  return {
    ...ownProps,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Uploader);