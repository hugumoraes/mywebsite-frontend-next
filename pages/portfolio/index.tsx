import React from 'react';

import GlobalStyle from '../../styles/global';

import Header from '../../components/Header';

import { Container } from '../../styles/pages/portfolio/styles';

const Portfolio: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <h1>Em desenvolvimento</h1>
      </Container>
      <GlobalStyle />
    </>
  );
};

export default Portfolio;
