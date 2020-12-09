import React from 'react';
import Link from 'next/link';

import { IProps } from './types';

import { Container, Grid, Item } from './styles';

const Blog: React.FC<IProps> = ({ blogposts }) => {
  return (
    <Container>
      <div className="h1">
        <h1>Blog</h1>
        <hr />
      </div>

      <Grid>
        {blogposts.map((blogpost) => (
          <Item key={blogpost.id}>
            <img src={`${blogpost.cover}`} alt="alt" />
            <h1>{blogpost.title.substring(0, 75)}</h1>
            <Link href={`/posts/${blogpost.id}`}>See post</Link>
          </Item>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;
