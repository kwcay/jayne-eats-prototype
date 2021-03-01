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
        <Route path={routes.ask()}>
          <AskPage />
        </Route>
        <Route path={routes.howItWorks()}>
          <HowItWorksPage />
        </Route>
        <Route path={routes.privacy()}>
          <PrivacyPage />
        </Route>
        <Route path={[routes.profile(), routes.profile('')]}>
          <ProfilePage />
        </Route>
        <Route path={routes.story()}>
          <StoryPage />
        </Route>
        <Route path={routes.landing()}>
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}
