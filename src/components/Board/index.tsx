import React from 'react';

import { loadLists } from '../../services/api';
import { List } from '..';
import { Container } from './styles';

const lists = loadLists();

const Board: React.FC = () => {
  return (
    <Container>
      {lists.map(list => <List key={list.title} data={list} />)}
    </Container>
  );
}

export default Board;