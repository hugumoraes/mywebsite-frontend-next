import styled from 'styled-components';

export const Container = styled.header`
  background: var(--primary-black);
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 60px;
  width: 100%;
`;

export const Center = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 1200px;

  a {
    color: var(--primary-white);
    font-weight: 700;
  }

  ul {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }

  .brand {
    font-size: 24px;
  }
`;

export const List = styled.li`
  margin: 0 24px;

  :last-child {
    margin-right: 0;
  }

  a {
    font-size: 20px;
  }
`;
