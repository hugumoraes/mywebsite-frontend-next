import React from 'react';
import strapi from '../services/strapi';

import GlobalStyle from '../styles/global';

// import strapi from '../../services/strapi';
import Container from '../components/Container';

import Header from '../components/Header';
import Biography from '../components/Biography';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

import { IBlogpost } from '../types/types.blog';

interface Props {
  data: IBlogpost[];
}

const Main: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Header />
      <Biography />
      <Container>
        <Portfolio />

        {data.length ? <Blog blogposts={data} /> : <h1>Loading</h1>}
      </Container>
      <Footer />

      <GlobalStyle />
    </>
  );
};

export async function getStaticProps(): Promise<{
  props: {
    data;
  };
}> {
  const { data } = await strapi.get('/posts?_limit=3&_sort=createdAt:DESC');

  return {
    props: {
      data,
    },
  };
}

export default Main;
