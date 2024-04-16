import './App.css';
function Bar({ percent }) {
    
    const barFillAmount = {
      width: `${percent}%`,
    };
  
    return (
      <div className="bar">
        <div className="bar-fill" style={barFillAmount}></div>
      </div>
    );
  }


export default Bar;