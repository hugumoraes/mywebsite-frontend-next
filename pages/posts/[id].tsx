import React, { useEffect } from 'react';
import format from 'date-fns/format';
import { parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import showdown from 'showdown';

import hljs from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';
import html5 from 'highlight.js/lib/languages/vbscript-html';
import strapi from '../../services/strapi';

import GlobalStyle from '../../styles/global';
import { Container, Post } from '../../styles/pages/posts/styles';

import Header from '../../components/Header';

// import Footer from '../../components/Footer';

import { IBlogpost } from '../../types/types.blog';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('html', html5);

interface Props {
  data: IBlogpost;
}

const Blogpost: React.FC<Props> = ({ data }) => {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);

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

  return { props: { data: data[0] } };
}

export async function getStaticPaths(): Promise<{
  paths: string[];
  fallback: boolean;
}> {
  const { data } = await strapi.get('/posts?_sort=createdAt:DESC');
  const paths = data.map((d) => `/posts/${d._id}`);

  return {
    paths,
    fallback: false,
  };
}

export default Blogpost;
