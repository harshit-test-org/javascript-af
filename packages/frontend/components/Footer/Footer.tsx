import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { GithubIcon } from '../Icons/GithubIcon';
import { TwitterIcon } from '../Icons/TwitterIcon';
import { JsafLogo } from '../Icons/JsafLogo';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${props => props.theme.fontFamily.sans};
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.purple};
  padding: 3rem 0;
  /* no padding horizontally, whole site inside container, implementation to follow */
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  .main {
    flex: 1;
    text-align: center;
  }
  .logo {
    padding: 1rem;
  }
`;

interface Props {}

export const Footer: React.FC<Props> = ({ children, ...others }) => {
  return (
    <StyledFooter {...others}>
      <div className="logo">
        <JsafLogo />
      </div>
      <div className="main">
        <p>
          Made with 💖‍ by{' '}
          <span>
            <a href="https://twitter.com/pantharshit00">Harshit Pant</a>
          </span>{' '}
          and{' '}
          <span>
            <a href="https://twitter.com/NMeuleman">Nicky Meuleman</a>
          </span>
        </p>
      </div>
      <div className="social">
        <ul>
          <li>
            <Button
              variant="icon"
              as="a"
              href="https://github.com/javascript-af/javascript-af"
            >
              <GithubIcon />
            </Button>
          </li>
          <li>
            <Button variant="icon" as="a" href="https://twitter.com">
              <TwitterIcon />
            </Button>
          </li>
        </ul>
      </div>
    </StyledFooter>
  );
};
