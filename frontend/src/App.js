import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from './components/pages/Welcome';
import Login from './components/pages/Login';
import Todo from './components/pages/Todo';
import './App.css';

function App() {

  return (
    <Router>
      <div className="pageBody">
      <Routes>
            <Route exact path="/"      element={<Welcome/>} />
            <Route path="/login"       element={<Login />} />
            <Route path="/Todo"        element={<Todo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
