import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { Typography } from '../Typography';
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
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.white};
  }
  .main {
    flex: 1;
    text-align: center;
    * {
      margin: 0;
    }
  }
  .social {
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      list-style: none;
      position: relative;
    }
    li + li ::before {
      /* use after element to preserve dimensions of the icon */
      position: absolute;
      content: '';
      width: 1px;
      /* center the vertical stroke */
      height: 60%;
      top: 20%;
      background-color: ${props => props.theme.colors.white};
    }
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
        <Typography variant="p">
          Made with 💖‍ by{' '}
          <span>
            <a href="https://twitter.com/pantharshit00">Harshit Pant</a>
          </span>{' '}
          and{' '}
          <span>
            <a href="https://twitter.com/NMeuleman">Nicky Meuleman</a>
          </span>
        </Typography>
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
