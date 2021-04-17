import styled from 'styled-components';
import {FONT, GRAY, EGGSHELL, WHITE, OVERLAY, BLUE, FONT_SM, FONT_MED, FONT_LG} from './style_constants.js';

export const Container = styled.div`
  font-family: ${FONT};
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  font-size: 1.5rem;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 25%;
  display: flex;
  width: 98vw;
  justify-content: space-between;
`;