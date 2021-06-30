import React from 'react'
import './App.css';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Dashboard from './pages/Home/Dashboard';
import SideDrawer from './components/Shared/navigation/SideDrawer'
const App =  () =>{
  return (
    <React.Fragment>
    
    <Router>
      <Route path="/">
      <Dashboard/>
      </Route>
    </Router>
    </React.Fragment>
          );
}

export default App;
