import { useState } from 'react';
import styled from 'styled-components';

import QueryForm from './QueryForm';
import Reaction from './Reaction';
import Response from './Response';
import { getHistoryLine } from '../history';
import { JAYNE_REACTION_SET } from '../reactions';
import useResult from '../useResult';
import { PageWrapper } from '../../shared';

const Intro = styled.div`
  margin: 0 auto;
  max-width: 600px;
`;

const FormWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const FormIntro = styled.span``;

export default function Ask() {
  const [query, setQuery] = useState('');
  const [history, updateHistory] = useState<string[]>([]);
  const inference = useResult(query);
  const name = 'Jayne';
  const reactionSetKey = JAYNE_REACTION_SET;

  function handleNewQuery(q: string) {
    setQuery(q);
    updateHistory([
      getHistoryLine('you', `Would ${name} enjoy ${q}?`),
      ...history,
    ]);
  }

  return (
    <PageWrapper>
      <h2>Ask {name}</h2>
      <Intro>
        Figuring out what {name} likes to eat is <em>hard</em>. Thankfully, we
        can just &ldquo;ask&rdquo; her (the robot version of her, that is).
      </Intro>
      <Reaction inference={inference} reactionSetKey={reactionSetKey} />
      <FormWrapper>
        <FormIntro>Would {name} enjoy...</FormIntro>
        <QueryForm initialQuery={query} onUpdateQuery={handleNewQuery} />
      </FormWrapper>
      <Response inference={inference} name={name} queryHistory={history} />
    </PageWrapper>
  );
}
