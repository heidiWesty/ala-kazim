import Home from './Pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import New from './Pages/New';


function Routes() {
  return (
    <Router>
        <Switch>
        <Route exact path="/">
            <Home/>
          </Route>
        <Route path="/new">
            <New/>
          </Route>
        </Switch>
    </Router>
  );
}

export default Routes;