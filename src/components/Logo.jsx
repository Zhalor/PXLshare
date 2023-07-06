import styled from "styled-components";
import Titan from '../fonts/TitanOne.ttf';

const Logo = styled.h1`
  @font-face {
    font-family: 'Titan';
    src: url(${Titan});
  }
  font-family: 'Titan';
  text-align: center;
  font-weight: 400;
  font-size: 2.5rem;
`;

export default Logo;