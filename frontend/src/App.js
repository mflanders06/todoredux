import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from './components/pages/Welcome';
import Login from './components/pages/Login';
import './App.css';

function App() {

  return (
    <Router>
      <div className="pageBody">
      <Routes>
            <Route exact path="/"      element={<Welcome/>} />
            <Route path="/login"       element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
