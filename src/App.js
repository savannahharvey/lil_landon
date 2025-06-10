import React from 'react';
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Main from './components/Main.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

// inspiration
// https://www.wix.com/website-template/view/html/
// 2788?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates
// %3Fcriteria%3Dprogrammer%2Bportfolio&tpClick=view_button&esi
// =b4c740e4-747a-4f94-9d01-17c1845068d5

export default App;
