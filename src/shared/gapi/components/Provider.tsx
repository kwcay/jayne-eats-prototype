import { ReactNode } from 'react';

import GapiAuthContext from '../context';
import useGapiAuth from '../useAuth';

interface Props {
  children: ReactNode;
}

export default function GapiAuthProvider({ children }: Props) {
  const isSignedIn = useGapiAuth();

  return (
    <GapiAuthContext.Provider value={isSignedIn}>
      {children}
    </GapiAuthContext.Provider>
  );
}
