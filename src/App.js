import React from 'react'
import {Route, BrowserRouter as Router,} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Nav from './Components/Nav/Nav'
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Route path={'/'} exact>
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
