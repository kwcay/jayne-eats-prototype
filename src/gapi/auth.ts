import { logError } from '../shared/reporting';

export function handleGoogleLogIn() {
  if (!gapi) {
    logError('Google API not loaded.');
    return;
  }

  gapi.auth2.getAuthInstance().signIn();
}

export function handleGoogleLogOut() {
  if (!gapi) {
    return;
  }

  gapi.auth2.getAuthInstance().signOut();
}
