import './App.css';

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
          <Link to="/module">Module</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>
      
      <div className="content">
        <Switch>
          <Route path="/module">
            <About/>
          </Route>
          <Route path="/profile">
            <Users/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
      
      </Router>


      <div className="footer">
      </div>

    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
