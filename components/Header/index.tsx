import React from 'react';
import Link from 'next/link';

import { Container, List, Center } from './styles';

const Header: React.FC = () => {
  const brand = {
    name: 'Home',
    href: '/',
  };

  const headerLinks = [
    {
      name: 'Portfolio',
      href: '/portfolio',
    },
    {
      name: 'Blog',
      href: '/blog',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ];

  return (
    <Container>
      <Center>
        <Link href={brand.href}>
          <a className="brand">{brand.name}</a>
        </Link>
        <ul>
          {headerLinks.map((link) => (
            <List key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </List>
          ))}
        </ul>
      </Center>
    </Container>
  );
};

export default Header;
