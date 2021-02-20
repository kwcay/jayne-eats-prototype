import styled from 'styled-components';

import { getHistoryLine } from '../history';
import { InferenceResult } from '../../model';

interface Props {
  inference: InferenceResult | null;
  name: string;
  queryHistory: string[];
}

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.yellow.fade(0.95).string()};
  border-radius: 3px;
  box-shadow: inset 0 0 4px
    ${(props) => props.theme.yellow.darken(0.6).string()};
  color: ${(props) => props.theme.yellow.darken(0.6).string()};
  display: flex;
  flex-direction: column;
  height: 200px;
  margin: 3rem auto 1rem;
  max-width: 700px;
  overflow-y: scroll;
  padding: 2rem;
  text-align: left;

  span:first-child {
    color: ${(props) => props.theme.textColor.string()};
    font-size: 1.6rem;
  }
`;

const Line = styled.span`
  font-size: 1.2rem;
  margin: 0.4rem 0;
`;

export default function Response({ inference, name, queryHistory }: Props) {
  let feedback;
  const botName = `${name.replace(' ', '-').toLowerCase()}-bot`;

  switch (inference) {
    case InferenceResult.InProgress:
      feedback = 'thinking...';
      break;

    case InferenceResult.Negative:
      feedback = 'probably not.';
      break;

    case InferenceResult.Positive:
      feedback = "there's a good chance.";
      break;

    case InferenceResult.Unknown:
      feedback = 'your guess is as good as mine.';
      break;

    default:
      feedback = '...';
  }

  return (
    <Wrapper>
      <Line>{getHistoryLine(botName, feedback)}</Line>
      {queryHistory.map((line) => (
        <Line key={line}>{line}</Line>
      ))}
    </Wrapper>
  );
}
