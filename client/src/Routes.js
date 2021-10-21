import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import Camview from './Pages/Camview'


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
        <Route path="/Camview">
          <Camview />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;