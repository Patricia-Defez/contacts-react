import React, { Component } from 'react';

import ContactList from './components/ContactList';


// import logo from './logo.svg';

// import './App.css';

import data from './data.json'


class App extends Component {
    

  
  render() {

    return (
        <div className="App">    

        <ContactList/>

      </div>

  );

}

}

export default App;