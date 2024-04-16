import './App.css';
import Grid from "./Grid";
import { Link } from "react-router-dom";

function Paint() {
  return (
    <div>
      <div className='menu-bar'>
        <div className='menu-logo'>The Ecochrome Project</div>
        <div className='menu-items'>
          <Link className='menu-item' to="/paint">paint!</Link>
          <Link className='menu-item' to="/about">about</Link>
          <Link className='menu-item' to="/resources">resources</Link>
        </div>
      </div>
      <div className='home-content'>
          <Grid/>
      </div>
    </div>
  );
}

export default Paint;
