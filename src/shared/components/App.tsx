import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { Landing } from '../../landing';

export default function JayneEatsApp() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}
