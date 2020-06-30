import React from 'react';

import { Container, Label } from './styles';

interface Props {
  data: {
    id: number;
    content: string;
    labels: string[];
    user?: string;
  }
}

const Card: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <header>
        {data.labels.map(label => <Label key={label} color={label} />)}
      </header>

      <p>{data.content}</p>

      {data.user && <img src="https://api.adorable.io/avatars/50/pipefy-clone.png" alt="Avatar" />}
    </Container>
  );
}

export default Card;