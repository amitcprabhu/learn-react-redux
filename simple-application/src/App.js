import React, { Component } from 'react';
import './App.css';
import Menu from './menu'
class App extends Component {
  state = {
    count: 0,
    homeInfo: "This is sample application. developed using reactjs. This application is having parent child components"
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <Menu></Menu>
        <div className="text-center">
          <h5>
            {this.state.homeInfo}
          </h5>
          <p>
            {this.state.count}
          </p>
          <button onClick={this.handleClick}>counter</button>

        </div>
      </div>
    );
  }
}

export default App;
