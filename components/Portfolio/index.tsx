import React, { useState } from 'react';
import Link from 'next/link';

import {
  Container,
  ProjectInfo,
  Item1,
  Item2,
  Item3,
  Item4,
  Item5,
  Item6,
} from './styles';

import portfolio1 from '../../assets/portfolio/portfolio1.jpg';
import portfolio2 from '../../assets/portfolio/portfolio2.jpg';
import portfolio3 from '../../assets/portfolio/portfolio3.jpg';
import portfolio4 from '../../assets/portfolio/portfolio4.jpg';

const PortfolioGrid: React.FC = () => {
  const [hover, setHover] = useState<number>(0);

  return (
    <Container>
      <Item1
        className="item1"
        hover={hover === 1 ? 0 : hover}
        onMouseEnter={() => setHover(1)}
        onMouseLeave={() => setHover(0)}
      >
        <ProjectInfo>
          <div className="links">
            <ul>
              <a href="https://github.com/hugumoraes/ui-clone-twitter">
                Github
              </a>
              <a href="https://relaxed-goldwasser-41a778.netlify.app/">Demo</a>
              <Link href="/blog">Blog</Link>
            </ul>
          </div>
          <div className="bio">
            <h1>Twitter UI Clone</h1>
            <p>
              Twitter interface clone using Typescript, React and Styled
              Components.
            </p>
          </div>
        </ProjectInfo>
        <img src={portfolio1} alt="Portfolio1" />
        <div className="color hide" />
      </Item1>
      <Item2 hover={hover} className="item2" />
      <Item3
        hover={hover === 3 ? 0 : hover}
        onMouseEnter={() => setHover(3)}
        onMouseLeave={() => setHover(0)}
        className="item3"
      >
        <img src={portfolio2} alt="" />
        <div className="color" />
      </Item3>
      <Item4
        hover={hover === 4 ? 0 : hover}
        onMouseEnter={() => setHover(4)}
        onMouseLeave={() => setHover(0)}
        className="item4"
      >
        <img src={portfolio4} alt="" />
        <div className="color" />
      </Item4>
      <Item5 hover={hover} className="item5" />
      <Item6
        hover={hover === 6 ? 0 : hover}
        onMouseEnter={() => setHover(6)}
        onMouseLeave={() => setHover(0)}
        className="item6"
      >
        <img src={portfolio3} alt="" />
        <div className="color" />
      </Item6>
    </Container>
  );
};

export default PortfolioGrid;
