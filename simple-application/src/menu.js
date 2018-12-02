import React, { Component } from 'react';

class Menu extends Component {
  state={
    display:""
  }
  onButtonClick(e){
    console.log(e.target.id);
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" onClick={this.onButtonClick}>Sample react application</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" onClick={this.onButtonClick}>Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={this.onButtonClick}>Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={this.onButtonClick}>Pricing</a>
              </li>
            </ul>
          </div>
        </nav>
        <br></br>
        <span>
          {this.props.discription}
        </span>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Menu;
