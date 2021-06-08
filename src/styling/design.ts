import {css} from 'lit';

export const design = css`
  :host,
  :root {
    --iff__color--white: white;
    --iff__color--black: black;
    --iff__font--family: 'Inter', sans-serif;

    --iff__dimension--10: 1rem;
    --iff__dimension--15: 1.5rem;
    --iff__dimension--20: 2rem;
    --iff__dimension--30: 3rem;
    --iff__dimension--40: 4rem;
    --iff__dimension--50: 5rem;
    --iff__dimension--60: 6rem;
    --iff__dimension--70: 7rem;
    /**
  Theme independent
  */
    --iff-alias__font--family: var(--iff__font--family);
    --iff-alias__header--height: var(--iff__dimension--70);
  }

  iff-page-layout[theme='light'] {
    --iff-alias__color--positive: var(--iff__color--white);
    --iff-alias__color--negative: var(--iff__color--black);
    --iff-alias__color--complement: darkgrey;

    --iff-alias__font--color: var(--iff__color--black);
    --iff-alias__background-color--primary: var(--iff-alias__color--positive);
    --iff-alias__background-color--secondary: var(--iff-alias__color--negative);
  }

  iff-page-layout[theme='dark'] {
    --iff-alias__color--positive: #202426;
    --iff-alias__color--negative: #6c733d;
    --iff-alias__color--complement: #9da65d;

    --iff-alias__font--color: var(--iff-alias__color--negative);
    --iff-alias__background-color--primary: var(--iff-alias__color--positive);
    --iff-alias__background-color--secondary: var(--iff-alias__color--negative);
  }
`;
