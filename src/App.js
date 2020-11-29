import './App.css';
import Home from './pages/Home.js';
import Modules from './pages/Modules.js';
import Profile from './pages/Profile.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      
      <Router>

      <div className="navigation">  
        <h2>logo</h2>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/modules">Modules</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>
      
      <div className="content">
        <Switch>
          <Route path="/modules">
            <Modules/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
      
      </Router>


      <div className="footer">
        Munim Rahman
      </div>

    </div>
  )
}

export default App;
