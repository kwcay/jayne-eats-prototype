import { FormEvent, ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import { NarrowColouredButton, Input } from '../../shared';

interface Props {
  initialQuery: string;
  onUpdateQuery: (query: string) => void;
}

const Form = styled.form``;

export default function QueryForm({ initialQuery, onUpdateQuery }: Props) {
  const [text, setText] = useState(initialQuery);

  function handleType(event: ChangeEvent<HTMLInputElement>) {
    setText(event?.target?.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (text.trim().length > 0) {
      onUpdateQuery(text);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input onChange={handleType} placeholder="apple pie" value={text} />
      <NarrowColouredButton onClick={handleSubmit}>?</NarrowColouredButton>
    </Form>
  );
}
