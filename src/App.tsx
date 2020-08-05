import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {  Home } from './pages';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;