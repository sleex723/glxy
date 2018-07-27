import React, { Component } from 'react';
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
