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

  .light {
    --iff-alias__color--positive: var(--iff__color--white);
    --iff-alias__color--negative: var(--iff__color--black);
    --iff-alias__color--complement: #bfbfbf;
    --iff-alias__color--accent-one: #bfbfbf;
    --iff-alias__color--accent-two: #bfbfbf;

    --iff-alias__font--color: var(--iff__color--black);
    --iff-alias__background-color--primary: var(--iff-alias__color--positive);
    --iff-alias__background-color--secondary: var(--iff-alias__color--negative);
  }

  .black {
    --iff-alias__color--positive: var(--iff__color--black);
    --iff-alias__color--negative: #e5eeff;
    --iff-alias__color--complement: #bfbfbf;
    --iff-alias__color--accent-one: #bfbfbf;
    --iff-alias__color--accent-two: #bfbfbf;

    --iff-alias__font--color: var(--iff-alias__color--negative);
    --iff-alias__background-color--primary: var(--iff-alias__color--positive);
    --iff-alias__background-color--secondary: var(--iff-alias__color--negative);
  }

  .blue-gradiant {
    --iff-alias__color--positive: #023859;
    --iff-alias__color--negative: #468fbd;
    --iff-alias__color--complement: #05aff2;
    --iff-alias__color--accent-one: #05c7f2;
    --iff-alias__color--accent-two: #05dbf2;

    --iff-alias__font--color: var(--iff-alias__color--negative);
    --iff-alias__background-color--primary: var(--iff-alias__color--positive);
    --iff-alias__background-color--secondary: var(--iff-alias__color--negative);
  }

  .colorful {
    --iff-alias__color--positive: #378c55;
    --iff-alias__color--negative: #d9851e;
    --iff-alias__color--complement: #d96725;
    --iff-alias__color--accent-one: #8c170d;
    --iff-alias__color--accent-two: #d93636;

    --iff-alias__font--color: var(--iff-alias__color--negative);
    --iff-alias__background-color--primary: var(--iff-alias__color--positive);
    --iff-alias__background-color--secondary: var(--iff-alias__color--negative);
  }

  .darkish {
    --iff-alias__color--positive: #291940;
    --iff-alias__color--negative: #d9d9d9;
    --iff-alias__color--complement: #3d734a;
    --iff-alias__color--accent-one: #73bf78;
    --iff-alias__color--accent-two: #262626;

    --iff-alias__font--color: var(--iff-alias__color--negative);
    --iff-alias__background-color--primary: var(--iff-alias__color--positive);
    --iff-alias__background-color--secondary: var(--iff-alias__color--negative);
  }

  .wood {
    --iff-alias__color--positive: #202426;
    --iff-alias__color--negative: #d9d9d9;
    --iff-alias__color--complement: #6c733d;
    --iff-alias__color--accent-one: #9da65d;
    --iff-alias__color--accent-two: #8c8c88;

    --iff-alias__font--color: var(--iff-alias__color--negative);
    --iff-alias__background-color--primary: var(--iff-alias__color--positive);
    --iff-alias__background-color--secondary: var(--iff-alias__color--negative);
  }

  .colorbild {
    --iff-alias__color--positive: #3e348c;
    --iff-alias__color--negative: #d9a17c;
    --iff-alias__color--complement: #7366d9;
    --iff-alias__color--accent-one: #54aa50;
    --iff-alias__color--accent-two: #428c3b;

    --iff-alias__font--color: var(--iff-alias__color--negative);
    --iff-alias__background-color--primary: var(--iff-alias__color--positive);
    --iff-alias__background-color--secondary: var(--iff-alias__color--negative);
  }
`;
