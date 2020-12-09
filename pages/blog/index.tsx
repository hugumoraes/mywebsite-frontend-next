import React from 'react';

import GlobalStyle from '../../styles/global';

import Header from '../../components/Header';

import { Container } from '../../styles/pages/blog/styles';

const Blog: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <GlobalStyle />
    </>
  );
};

export default Blog;
