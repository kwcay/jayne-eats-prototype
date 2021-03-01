import { useParams } from 'react-router-dom';

import ImportProfile from './Import';
import Summary from './Summary';
import { IMPORT_PROFILE, ProfileAction } from '../constants';

export default function About() {
  const { action } = useParams<{ action: ProfileAction }>();

  switch (action) {
    case IMPORT_PROFILE:
      return <ImportProfile />;

    default:
      return <Summary />;
  }
}
