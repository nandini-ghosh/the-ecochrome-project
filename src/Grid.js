import React from 'react';
import './App.css'; // Import CSS file

function Grid() {
  const handleClick = (e) => {
    var target = (e).target;
    if (target.tagName in {TD:1, TH:1})
      target.setAttribute('style', 'background-color: #FF7E7E');
  };

  const tableRows = [];

  for (let i = 0; i < 10; i++) {
    const cells = [];
    for (let j = 0; j < 10; j++) {
      cells.push(<td key={`cell-${i}-${j}`} className="cell" onClick={handleClick}>&nbsp;</td>);
    }
    tableRows.push(<tr key={`row-${i}`} className="row">{cells}</tr>);
  }

  return (
    <table className="grid-table">
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
}

export default Grid;