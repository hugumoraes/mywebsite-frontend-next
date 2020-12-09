import React from 'react';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import { Container, Center, SocialMedia } from './styles';

const Biography: React.FC = () => {
  return (
    <Container>
      <Center>
        <h1>Hi, I&apos;m Hugo.</h1>
        <p>
          I&apos;m a full stack software <br />
          developer
        </p>
        <SocialMedia>
          <a
            href="https://www.linkedin.com/in/hugumoraes/"
            className="socialMedia"
          >
            <FaLinkedinIn />
          </a>
          <a href="whttps://www.github.com/hugumoraes" className="socialMedia">
            <FaGithub />
          </a>
        </SocialMedia>
      </Center>
    </Container>
  );
};

export default Biography;
