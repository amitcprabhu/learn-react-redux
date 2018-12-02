import React, { Component } from 'react';
import './App.css';
import Navbars from './components/Navbars';
import { BrowserRouter , Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbars />
          <br /><br /><br /><br /><br /><br /><br />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
