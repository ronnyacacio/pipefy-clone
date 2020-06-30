import styled from 'styled-components';

import { PropsContainer } from '.';

export const Container = styled.div<PropsContainer>`
  height: 100%;
  padding: 0 15px;
  opacity: ${({ done }) => (done ? 0.6 : 1)};

  flex: 0 0 320px;

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 30px;
      height: 30px;
      border-radius: 18px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 20px;
  }
`;
