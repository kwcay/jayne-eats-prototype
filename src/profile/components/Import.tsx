import Connect from './connect/Connect';
import { PageWrapper } from '../../shared';

export default function ImportProfile() {
  return (
    <PageWrapper>
      <h1>New Profile</h1>
      <p>To create or import a profile, connect a spreadsheet.</p>
      <Connect />
    </PageWrapper>
  );
}
