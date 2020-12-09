import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;
