import React from 'react';
import Color from './color';
import Form from './form';

class ColorList extends React.Component {
  constructor(props){
    super(props);
    this.state = { colors: this.props.colors };
    this.deleteColor = this.deleteColor.bind(this); //bind delete action
    this.editColorElement = React.createRef(); // in order to pass state to the child component
    }
  deleteColor = (hex) => {
    const currentColors = this.state.colors;
    const colors = currentColors.filter(color => color.hex !== hex); // colors but with no this hex

    this.setState({ colors });
  }
  editColorLink = (hex) => {
    this.editColorElement.current.changeHexValue(hex); // hex to the input value
  }
  addColor = (hex) => {
    this.setState({ colors: this.state.colors.concat(
      {
        hex
      }) 
    });
  };
  editColorButton = (hex,oldhex) => {
    const currentColors = this.state.colors;
    //edit -> delete and then add
    const colors = currentColors.filter(color => color.hex !== oldhex).concat({hex: hex});
    this.setState({ colors });
  };
  render(){
    return(
      <div className="row">
        <div className="col-xs-6">
        {this.state.colors.map(color => {
          return(   
            <div className="row">
              <Color key={color.hex} color={color} handleDelete={this.deleteColor}  handleEdit={this.editColorLink} />
            </div>
          );
        })}
         </div>
        <div className="col-xs-6">
          <Form addColorAction={this.addColor} editColorAction={this.editColorButton} ref={this.editColorElement} />
        </div>
      </div>
    );
  }
}

export default ColorList;