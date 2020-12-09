import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 1920px) and (min-width: 1366px) {
    display: flex;

    flex-direction: column;
    align-items: center;
  }
`;

export const Post = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-start;

  background: white;

  margin-top: 2rem;
  padding: 12px 0;

  h1 {
    text-align: center;
    font-size: 1.5rem;
  }

  h2 {
    text-align: center;
    font-size: 1.25rem;
  }

  p {
    margin: 8px 12px;
  }

  span {
    font-size: 1rem;
    color: var(--primary-black);
  }

  @media (max-width: 1920px) and (min-width: 1366px) {
    width: 1200px;

    padding: 24px 48px;
    border-radius: 8px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      align-self: center;
      text-align: center;
      font-size: 1.75rem;
    }

    h1 ~ span {
      align-self: center;
    }

    h2 {
      text-align: start;
      font-size: 1.5rem;
    }

    p {
      margin: 4px 0;
      font-size: 1.25rem;
    }

    pre {
      width: 980px;
      code {
        span {
          font-size: 1.2rem;
          line-height: 1.2rem;
          color: #f2f2f2;
        }
      }
    }

    img {
      border-radius: 4px;
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
    }
  }
`;
