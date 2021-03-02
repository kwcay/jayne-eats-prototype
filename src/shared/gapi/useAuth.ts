import { useEffect, useState } from 'react';

import { API_KEY, CLIENT_ID, DISCOVERY_DOCS, SCOPE } from './constants';
import { logError } from '../reporting';

export default function useGapiAuth() {
  const [isSignedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if (!gapi) {
      logError('Google API not loaded.');
      return;
    }

    async function initGapi() {
      try {
        await gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPE,
        });
      } catch (error) {
        logError('Could not load Google client', error);
        return;
      }

      // Listen for sign-in state changes.
      gapi.auth2.getAuthInstance().isSignedIn.listen(setSignedIn);

      // Handle the initial sign-in state.
      setSignedIn(gapi.auth2.getAuthInstance().isSignedIn.get());
    }

    gapi.load('client:auth2', initGapi);
  });

  return isSignedIn;
}
