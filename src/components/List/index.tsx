import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Card } from '..';
import { Container } from './styles';

interface Card {
  id: number;
  content: string;
  labels: string[];
  user?: string;
};

interface Props {
  data: {
    title: string;
    creatable: boolean;
    cards: Card[];
    done?: boolean;
  };
}

export interface PropsContainer {
  done: boolean;
}


const List: React.FC<Props> = ({ data }) => {
  return (
    <Container done={!!data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={20} color="#fff" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map(card => <Card key={card.id} data={card} />)}
      </ul>
    </Container>
  );
}

export default List;