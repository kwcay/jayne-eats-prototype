import ConnectWrapper from './ConnectWrapper';
import ImportActionsWrapper from './ImportActionsWrapper';
import {
  Input,
  NarrowColouredButton,
  NarrowLightButton,
} from '../../../shared';

interface Props {
  onCancel: () => void;
}

export default function UploadCsv({ onCancel }: Props) {
  return (
    <ConnectWrapper>
      <Input type="file" />

      <ImportActionsWrapper>
        <NarrowColouredButton>Upload</NarrowColouredButton>
        <NarrowLightButton onClick={onCancel}>Cancel</NarrowLightButton>
      </ImportActionsWrapper>
    </ConnectWrapper>
  );
}
