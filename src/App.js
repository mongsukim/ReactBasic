import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Users from './pages/Users';
import Movies from './pages/Movies'
import Home from './pages/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="container">
      <Switch>
        <Route path="/movies">
          <Movies/>
        </Route>
        <Route path="/users">
          <Users/>
        </Route>
        <Route path="/" exact>
          <Home/>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
