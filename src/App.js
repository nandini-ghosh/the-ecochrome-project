import './App.css';
import Grid from "./Grid";

function App() {
  return (
    <div>
      <div className='menu-bar'>
        <div className='menu-logo'>The Echochrome Project</div>
        <div className='menu-items'>
          <div className='menu-item'>paint!</div>
          <div className='menu-item'>about</div>
          <div className='menu-item'>resources</div>
        </div>
      </div>
      <div className='home-content'>
          <Grid/>
      </div>
    </div>
  );
}

export default App;
