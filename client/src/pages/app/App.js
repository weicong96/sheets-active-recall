import React, { Component } from 'react';
import sheets from './sheets.svg';
import Uploader from '../upload/uploader';
import {connect} from 'react-redux';
import {uploadFile} from '../../reducers/actions';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={sheets} className="App-logo" alt="logo" />
          <Uploader></Uploader> 
          <p>
            Convert your active recall questions to a telegram bot!<br/>
            Telegram located at: <a className='telegram-link' href="https://t.me/NotesyBot">@NotesyBot</a>
          </p>
        </header>
      </div>
    );
  }
}

export default connect()(App)