import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = { hexValue: '', oldHexValue: '' }; //oldHexValue for edit
    }

  handleButtonClickAdd = (event) => {
    event.preventDefault();
    if(this.state.hexValue!==''){ //if input is not empty
      this.props.addColorAction(this.state.hexValue);
    }
    else{
      alert('Input is required');
    }
    
    this.setState({ hexValue: '', oldHexValue: '' }); // clear input value
  };

  handleButtonClickEdit = (event) => {
    event.preventDefault();
    if(this.state.hexValue!==''){ //if input is not empty
      this.props.editColorAction(this.state.hexValue,this.state.oldHexValue);
    }
    else{
      alert('Input is required');
    }
    
    this.setState({ hexValue: '', oldHexValue: '' }); // clear input value
  };

  handleHexChange = (event) => { //controlled input component
    this.setState({ hexValue: event.target.value });
  };

  changeHexValue = (hex) => { // hex to the input value
    this.setState({ hexValue: hex, oldHexValue: hex });
  };

  render(){
    return(
      <div className="row">
        <div className="col-md-12">
          <input type="text" placeholder="Give a color hex" className="col-md-6" value={this.state.hexValue} onChange={this.handleHexChange} />
          <button className="col-md-3" onClick={this.handleButtonClickAdd}>Add Color</button>
          <button className="col-md-3" onClick={this.handleButtonClickEdit}>Edit Color</button>
        </div>
      </div>
    );
  }
}

export default Form;