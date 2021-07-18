import React from 'react'
import './App.css';
import { BrowserRouter as Router , Route,Switch,HashRouter } from 'react-router-dom';

import Dashboard from './pages/Home/Dashboard';
import MiniDrawer from './components/Shared/navigation/SideDrawer'
import Third from './pages/Home/Third';
import Fifth from './pages/Home/Fifth';
import Magic from './pages/Home/Magic';

const App =  () =>{
  return (
    <React.Fragment>
      
    <Router>
    <MiniDrawer/>
      <HashRouter>
        <Route path="/testproject" exact>
      <Dashboard/>
      </Route>
      <Route path="/third" exact>
      <Third/>
      </Route>
      <Route path="/fifth" exact>
      <Fifth/>
      </Route>
      <Route path="/magic" exact>
      <Magic/>
      </Route>
      </HashRouter>
      </Router>
    </React.Fragment>
          );
}

export default App;
