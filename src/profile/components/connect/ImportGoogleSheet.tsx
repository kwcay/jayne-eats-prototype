import ConnectWrapper from './ConnectWrapper';
import ImportActionsWrapper from './ImportActionsWrapper';
import {
  handleGoogleLogOut,
  Input,
  NarrowColouredButton,
  NarrowLightButton,
} from '../../../shared';

export default function ImportGoogleSheet() {
  return (
    <ConnectWrapper>
      <Input placeholder="paste a spreadsheet link here" />

      <ImportActionsWrapper>
        <NarrowColouredButton>Import Google Sheet</NarrowColouredButton>
        <NarrowLightButton onClick={handleGoogleLogOut}>
          Logout
        </NarrowLightButton>
      </ImportActionsWrapper>
    </ConnectWrapper>
  );
}
