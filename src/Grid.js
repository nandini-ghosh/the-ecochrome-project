import React, { useState, useEffect } from 'react';
import './App.css'; // Import CSS file

function Grid() {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [currentColor, setCurrentColor] = useState('#000000'); 

  useEffect(() => {
    
    const colorPicker = document.getElementById("colorpicker");
    if (colorPicker) {
      colorPicker.addEventListener('input', handleColorChange);
    }
    
  }, []); 

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseEnter = (e) => {
    if (isMouseDown) {
      const target = e.target;
      if (target.tagName === 'TD') {
        target.style.backgroundColor = currentColor;
      }
    }
  };

  const handleClick = (e) => {
    var target = (e).target;
    if (target.tagName in { TD: 1, TH: 1 })
      target.setAttribute('style', `background-color: ${currentColor}`);
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setCurrentColor(newColor); 
  };

  const tableRows = [];

  for (let i = 0; i < 10; i++) {
    const cells = [];
    for (let j = 0; j < 20; j++) {
      cells.push(<td key={`cell-${i}-${j}`} className="cell"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}></td>);
    }
    tableRows.push(<tr key={`row-${i}`} className="row">{cells}</tr>);
  }

  return (
    <div className='grid'>
      <table className="grid-table">
        <tbody>
          {tableRows}
        </tbody>
      </table>

      <div className='label'>Click to pick a color:</div>
      <input className="colour-picker" type="color" value={currentColor} id="colorpicker" />
    </div>
  );
}

export default Grid;
