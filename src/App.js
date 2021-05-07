import logo from './logo.svg';
import './App.scss';
import './styles/app.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Dashboard from './components/Dashboard/Dashboard';
import HomeMain from './components/Home/Home/HomeMain';
import Home from './components/Home/Home/Home';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
