import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Admin from './Pages/Admin';


function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Admin">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;