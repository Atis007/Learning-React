//import { styled } from 'styled-components';

import logo from "../assets/logo.png";
//import classes from './Header.module.css'; // Importing classes from module.css
//Note: classes is a fitting name for it, because its importing CSS classes, but you can name it anything you want.

// one way to do it is with styled components, but it's commented out for now
// we can also use module.css
// we can also use plain css, but module.css is better because it scopes the styles to this component only

// but right now, I`ll use tailwind for this project
// tailwind is a utility-first CSS framework that provides a set of pre-defined classes that can be used to style HTML elements directly in the markup

/* const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  & img {
    object-fit: contain;
    margin-bottom: 2rem;
    width: 11rem;
    height: 11rem;
  }

  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-align: center;
    text-transform: uppercase;
    color: #9a3412;
    font-family: "Pacifico", cursive;
    margin: 0;
  }

  & p {
    text-align: center;
    color: #a39191;
    margin: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 4rem; //only executed if the media is met

    & h1 {
      font-size: 2.25rem;
    }
  }
`; */

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
      <img
        src={logo}
        alt="A canvas"
        className="mb-8 w-44 h-44 object-contain"
      />
      <h1 className="text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title">
        ReactArt
      </h1>
      <p className="text-stone-500">A community of artists and art-lovers.</p>
    </header>
  );
}
