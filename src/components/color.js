import React from 'react';

const Color = ({color, handleDelete, handleEdit}) => {
const handleDeleteClick = (event) => {
  event.preventDefault();
  handleDelete(color.hex)
}
const handleEditClick = (event) => {
  event.preventDefault();
  handleEdit(color.hex)
}
return([
  <div className="col-xs-3">{color.hex}</div>,
  <div className="col-xs-3">
    <div style={{ // the square div with the color
      height:'50px',
      width:'50px', 
      marginBottom:'20px',
      listStyleType:'none',
      border:'1px solid #000',
      backgroundColor:color.hex
    }}>
  </div>  
  </div>,
  <a href="#" className="col-xs-3" onClick={handleDeleteClick}>Delete</a>,
  <a href="#" className="col-xs-3" onClick={handleEditClick}>Edit</a>
  ]);
}

export default Color;