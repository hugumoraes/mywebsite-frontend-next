import React from 'react';

import GlobalStyle from '../../styles/global';

// import ContactForm from '../../components/ContactForm';

import Header from '../../components/Header';

import Container from '../../components/Container';

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Contact me</h1>
        <p>Any questions or remarks? Just write us a message!</p>
        {/* <ContactForm /> */}
      </Container>
      <GlobalStyle />
    </>
  );
};

export default Contact;
