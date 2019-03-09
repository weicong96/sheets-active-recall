import React, { Component } from 'react';
import sheets from './sheets.svg';
import Uploader from '../upload/uploader';
import {connect} from 'react-redux';

import './App.css';
class App extends Component {
  upload(details){
    this.props.history.push('/reader/'+details.fileId);
  }
  render() {
    return (
      <div className="App">
          <img src={sheets} className="App-logo" alt="logo" />
          <Uploader onUploaded={this.upload.bind(this)}></Uploader> 
          <p>
            Convert your active recall questions to a telegram bot!<br/>
            Telegram located at: <a className='telegram-link' href="https://t.me/NotesyBot">@NotesyBot</a>
          </p>
      </div>
    );
  }
}

export default App