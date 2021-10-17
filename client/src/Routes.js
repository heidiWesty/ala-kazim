import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import BackendDisplay from './Pages/BackendDisplay';


function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/backendDisplay">
          <BackendDisplay />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;