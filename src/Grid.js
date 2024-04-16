import React, { useState, useEffect } from 'react';
import './App.css';
import Bar from './Bar';

function Grid() {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [currentColor, setCurrentColor] = useState('#000000');
  const [cellColors, setCellColors] = useState(Array(10).fill(Array(20).fill('#FFFFFF')));
  const [percentage, setPercentage] = useState(0); // State for the percentage

  useEffect(() => {
    const colorPicker = document.getElementById("colorpicker");
    if (colorPicker) {
      colorPicker.addEventListener('input', handleColorChange);
    }
  });

  useEffect(() => {
    // Calculate initial percentage based on initial cell colors
    calculatePercentage(cellColors);
  });

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleClick = (rowIndex, cellIndex) => {
    const newColors = cellColors.map((row, rIndex) => (
      rIndex === rowIndex ? row.map((color, cIndex) => (
        cIndex === cellIndex ? currentColor : color
      )) : row
    ));
    setCellColors(newColors);
    calculatePercentage(newColors); // Recalculate percentage on cell color change
  };

  const handleMouseEnter = (e, rowIndex, cellIndex) => {
    if (isMouseDown) handleClick(rowIndex, cellIndex);
  };

  const handleColorChange = (e) => {
    setCurrentColor(e.target.value);
  };

  const handleReset = () => {
    const newCellColors = Array(10).fill(Array(20).fill('#FFFFFF'));
    setCellColors(newCellColors);
    calculatePercentage(newCellColors); // Recalculate percentage on canvas reset
  };

  const calculateEnergy = (r, g, b) => {
    const weight_r = 0.25;
    const weight_g = 0.3;
    const weight_b = 0.6;

    const energy = (r * weight_r) + (g * weight_g) + (b * weight_b);
    const percentage = (energy / 255 * 100);

    return percentage;
  };

  const calculateTotalEnergy = (cellColors) => {
    const totalEnergy = cellColors.reduce((acc, row) => {
      return acc + row.reduce((acc, color) => {
        const { r, g, b } = convertToRGB(color);
        const energy = calculateEnergy(r, g, b);
        return acc + energy;
      }, 0);
    }, 0);

    const whiteEnergy = calculateEnergy(255, 255, 255);
    const blackEnergy = calculateEnergy(0, 0, 0);

    const percentage = ((totalEnergy - blackEnergy) / (whiteEnergy - blackEnergy)) * 100;
    return percentage / 200;
  };

  const calculatePercentage = (cellColors) => {
    const newPercentage = calculateTotalEnergy(cellColors);
    setPercentage(newPercentage);
  };

  const convertToRGB = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return { r, g, b };
  };

  const tableRows = cellColors.map((row, rowIndex) => (
    <tr key={`row-${rowIndex}`}>
      {row.map((color, cellIndex) => (
        <td key={`cell-${rowIndex}-${cellIndex}`} className="cell"
          style={{ backgroundColor: color }}
          onMouseDown={handleMouseDown}
          onMouseEnter={(e) => handleMouseEnter(e, rowIndex, cellIndex)}
          onMouseUp={handleMouseUp}
          onClick={() => handleClick(rowIndex, cellIndex)}></td>
      ))}
    </tr>
  ));

  return (
    <div>
      <Bar percent={percentage} />
      <div className='grid'>
        <table id="grid-table" className="grid-table">
          <tbody>
            {tableRows}
          </tbody>
        </table>

        <div className='grid-controls'>
          <button className="reset-button" onClick={handleReset}>Erase Canvas</button>
          <div className='colour-picker-wrapper'>
            <div className='label'>Click to pick a color:</div>
            <input className="colour-picker" type="color" value={currentColor} id="colorpicker" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
