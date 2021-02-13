import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import * as routes from '../routes';
import { AboutPage } from '../../about';
import { AskPage } from '../../ask';
import { PrivacyPage } from '../../privacy';

export default function JayneEatsApp() {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.about()}>
          <AboutPage />
        </Route>
        <Route exact path={routes.ask()}>
          <AskPage />
        </Route>
        <Route exact path={routes.privacy()}>
          <PrivacyPage />
        </Route>
        <Route path={routes.landing()}>
          <Redirect to={routes.about()} />
        </Route>
      </Switch>
    </Router>
  );
}
