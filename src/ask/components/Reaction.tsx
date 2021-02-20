import { sample } from 'lodash';
import styled from 'styled-components';

import {
  getIdleReactions,
  getNegativeReactions,
  getPositiveReactions,
  getThinkingReactions,
  getUnknownReactions,
  mdwReactionSet,
  ReactionSetKey,
  reactionSets,
} from '../reactions';
import { InferenceResult } from '../../model';
import { Image } from '../../shared';

interface Props {
  inference: InferenceResult | null;
  reactionSetKey: ReactionSetKey;
}

const Wrapper = styled.div`
  margin: 5vh auto;
`;

export default function Reaction({ inference, reactionSetKey }: Props) {
  const faces = reactionSets.get(reactionSetKey) || mdwReactionSet;
  const idleFaces = getIdleReactions(faces);
  const negativeFaces = getNegativeReactions(faces);
  const positiveFaces = getPositiveReactions(faces);
  const thinkingFaces = getThinkingReactions(faces);
  const cluelessFaces = getUnknownReactions(faces);
  let src = faces.smiling;

  switch (inference) {
    case InferenceResult.InProgress:
      src = sample(thinkingFaces) ?? thinkingFaces[0];
      break;

    case InferenceResult.Negative:
      src = sample(negativeFaces) ?? negativeFaces[0];
      break;

    case InferenceResult.Positive:
      src = sample(positiveFaces) ?? positiveFaces[0];
      break;

    case InferenceResult.Unknown:
      src = sample(cluelessFaces) ?? cluelessFaces[0];
      break;

    default:
      src = sample(idleFaces) ?? idleFaces[0];
  }

  return (
    <Wrapper>
      <Image height="100px" width="100px" src={src} />
    </Wrapper>
  );
}
