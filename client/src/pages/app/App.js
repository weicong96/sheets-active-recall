import React, { Component } from 'react';
import sheets from './sheets.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={sheets} className="App-logo" alt="logo" />
          <button>Load Notes</button>
          <p>
            Convert your active recall questions to a telegram bot!<br/>
            Telegram located at: <a class='telegram-link' href="https://t.me/NotesyBot">@NotesyBot</a>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
