import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as routes from '../routes';
import { StoryPage } from '../../story';
import { AskPage } from '../../ask';
import { HowItWorksPage } from '../../how';
import { LandingPage } from '../../landing';
import { PrivacyPage } from '../../privacy';
import { ProfilePage } from '../../profile';

export default function JayneEatsApp() {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.ask()}>
          <AskPage />
        </Route>
        <Route exact path={routes.howItWorks()}>
          <HowItWorksPage />
        </Route>
        <Route exact path={routes.privacy()}>
          <PrivacyPage />
        </Route>
        <Route exact path={routes.profile()}>
          <ProfilePage />
        </Route>
        <Route exact path={routes.story()}>
          <StoryPage />
        </Route>
        <Route path={routes.landing()}>
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}
