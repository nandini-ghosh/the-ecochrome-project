import React, { useState, useEffect } from 'react';
import './App.css'; // Import CSS file

function Grid() {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [backRGB, setBackRGB] = useState('#000000'); // Initialize color state

  useEffect(() => {
    // Add event listener for color picker change
    const colorPicker = document.getElementById("colorpicker");
    if (colorPicker) {
      colorPicker.addEventListener('input', handleColorChange);
    }
    // Remove event listener when component unmounts
    return () => {
      if (colorPicker) {
        colorPicker.removeEventListener('input', handleColorChange);
      }
    };
  }, []); // Empty dependency array to run only once on component mount

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
        target.style.backgroundColor = backRGB; // Use color state here
      }
    }
  };

  const handleClick = (e) => {
    var target = (e).target;
    if (target.tagName in { TD: 1, TH: 1 })
      target.setAttribute('style', `background-color: ${backRGB}`);
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setBackRGB(newColor); // Update color state
  };

  const tableRows = [];

  for (let i = 0; i < 10; i++) {
    const cells = [];
    for (let j = 0; j < 10; j++) {
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

      <input className="colour-picker" type="color" value={backRGB} id="colorpicker" />
    </div>
  );
}

export default Grid;
