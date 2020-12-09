import styled, { css } from 'styled-components';

interface ItemI {
  hover: number;
}

interface Twitter {
  hover: number;
}

const Item = css<ItemI>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;

  background: white;

  .hide {
    z-index: ${({ hover }) => hover === 0 && '-100'};
  }

  .color {
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ hover }) => hover === 1 && '#1da1f3'};
    background: ${({ hover }) => hover === 3 && '#f3cf6f'};
    background: ${({ hover }) => hover === 4 && '#fe5f99'};
    background: ${({ hover }) => hover === 6 && '#64105b'};
    transition: 0.4s ease;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transition: position 2s;
    transition: position 2s;
    width: 100%;
    height: 100%;
    transition: 0.4s;
    transition: margin 0.4s width 0.4s height 0.4s;
  }

  transition: 0.4s;
`;

export const Item1 = styled.div<ItemI>`
  ${Item}

  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;

  transition: 0.4s;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);

    img {
      transition: 0.4s;
      transition: margin 0.4s width 0.4s height 0.4s;

      margin-top: 48px;
      margin-left: 48px;
      width: 50%;
      height: 50%;
    }
  }
`;

export const Item2 = styled.div<ItemI>`
  ${Item}

  background: transparent !important;
`;

export const Item3 = styled.div<ItemI>`
  ${Item}

  grid-row-start: 2;
  grid-row-end: 4;
`;

export const Item4 = styled.div<ItemI>`
  ${Item}

  grid-column-start: 1;
  grid-column-end: 2;

  grid-row-start: 3;
  grid-row-end: 5;
`;

export const Item5 = styled.div<ItemI>`
  ${Item}

  background: transparent;
`;

export const Item6 = styled.div<ItemI>`
  ${Item}

  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 6;
`;

export const Container = styled.div`
  margin-top: 24px;

  width: 100%;
  display: grid;
  grid-template-columns: 392px 392px 392px;
  grid-template-rows: 240px 240px 240px 240px 240px;
  grid-gap: 12px;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 48px;

  width: 100%;
  height: 100%;

  .links {
    width: 302px;
    display: flex;

    align-self: flex-end;

    justify-content: center;
    align-items: center;

    height: 64%;

    ul {
      display: flex;
      flex-direction: column;

      a {
        text-align: center;

        border-radius: 4px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

        color: var(--primary-white);
        background: var(--secondary-black);

        padding: 8px 24px;
        margin: 8px 0;
      }
    }
  }

  .bio {
    h1 {
      font-size: 32px;
      color: var(--primary-black);
    }

    p {
      font-size: 24px;
      color: var(--primary-black);
    }
  }
`;
