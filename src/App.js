import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import { America } from './routes/america';
import { Vietnam } from './routes/vietnam';
import { Japan } from './routes/japan';


function App() {
  return (
    <div className="background">
        <nav>
          <span>click to open</span>
          <Link to="/japan" style={{color: "red", padding: "20px"}}>Japan Time</Link>
          <Link to="/america" style={{color: "red", padding: "20px"}}>America Time</Link>
          <Link to="/vietnam" style={{color: "red", padding: "20px"}}>Vietnam Time</Link>
        </nav>
            <div className="App">
              <h1>Time Clock</h1>
            </div>
            <Routes>
              <Route path="/japan" element={<Japan />}></Route>
              <Route path="/america" element={<America />}></Route>
              <Route path="/vietnam" element={<Vietnam />}></Route>
            </Routes>
    </div>
  );
}

export default App;
