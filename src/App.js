import React, { Component } from 'react';
import ColorList from './components/colorList';

const colors = []; //empty array

//The array after adding 2 colors
//const colors = [ { hex: "#ff00ff" }, { hex: "#fff000" } ];

class App extends Component {
  render() {
    return (
      <div className="container bodyClass">
       <ColorList colors={colors} />
      </div>
    );
  }
}

export default App;