import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {uploadFile} from '../../reducers/actions';
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
    this.props.onUpload(this.state.file).then((res)=>{
      this.props.onUploaded(res.action.payload.data);
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
  onUpload: PropTypes.func.isRequired,
  onUploaded: PropTypes.func.isRequired
}
const mapStateToProps=(state)=>{
  return {}
}
const mapDispatchToProps= (dispatch, ownProps)=>{
  return {
    ...ownProps,
    onUpload: (file)=> dispatch(uploadFile(file)) 
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Uploader);