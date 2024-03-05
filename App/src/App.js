
import './App.css';
import Home from './screens/Home';

import {
  Route,
  BrowserRouter as Router, Routes
} from "react-router-dom";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Login from './screens/Login';
import Signup from './screens/Signup';

function App() {
  return (
    <Router>
      <div >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/CreateUser" element={<Signup />} />
        </Routes>


      </div>
    </Router>

  );
}

export default App;
