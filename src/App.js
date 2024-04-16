import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Paint from './Paint';
import About from './About';
import Resources from './Resources';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/paint" />} />
          <Route path="/paint" element={<Paint />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
