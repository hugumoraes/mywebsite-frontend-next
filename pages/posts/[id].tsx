import React from 'react';
import format from 'date-fns/format';
import { parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import showdown from 'showdown';

import strapi from '../../services/strapi';

import GlobalStyle from '../../styles/global';
import { Container, Post } from './styles';

import Header from '../../components/Header';

// import Footer from '../../components/Footer';

// import CodeBlock from '../../util/CodeBlock';

// interface IBlogpost {
//   id: string;
//   title: string;
//   content: string;
//   published: string;
//   createdAt: string;
// }

// interface Props {
//   data: IBlogpost;
// }

const Blogpost: React.FC = ({ data }) => {
  // const renderers = {
  //   code: CodeBlock,
  //   image: ({
  //     alt,
  //     src,
  //     title,
  //   }: {
  //     alt?: string;
  //     src?: string;
  //     title?: string;
  //   }) => (
  //     <img
  //       alt={alt}
  //       src={src}
  //       title={title}
  //       style={{ maxWidth: 1200, margin: '8px 0' }}
  //     />
  //   ),
  // };

  const converter = new showdown.Converter();
  const html = converter.makeHtml(data.content);

  const date = parseISO(data.createdAt);

  function createMarkup() {
    return { __html: html };
  }

  return (
    <>
      <Container>
        <Header />

        <Post>
          <h1>{data.title}</h1>
          <span>
            {format(date, "dd 'de' MMMM' às ' HH:mm", {
              locale: pt,
            })}
          </span>
          <div dangerouslySetInnerHTML={createMarkup()} />
        </Post>

        {/* <Footer /> */}
      </Container>
      <GlobalStyle />
    </>
  );
};

export async function getStaticProps({ params }): Promise<{ props }> {
  const { data } = await strapi.get(`/posts?_id=${params.id}`);

  // Pass post data to the page via props
  return { props: { data: data[0] } };
}

export async function getStaticPaths(): Promise<{
  paths: string[];
  fallback: boolean;
}> {
  // Call an external API endpoint to get posts
  const { data } = await strapi.get('/posts?_sort=createdAt:DESC');

  // Get the paths we want to pre-render based on posts
  const paths = data.map((d) => `/posts/${d._id}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false,
  };
}

export default Blogpost;
