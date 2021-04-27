import styled from 'styled-components';
import {FONT, GRAY2, GRAY3, WHITE, OVERLAY, BLUE, FONT_SM, FONT_MED, FONT_LG} from './style_constants.js';

export const Container = styled.div`
  position: relative;
  font-family: ${FONT};
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 30%;
  display: flex;
  width: 98vw;
  justify-content: space-between;
`;

export const Line = styled.div`
  display: flex;
  margin-top: 50px;
`;

export const TrackingLine = styled.div`
  border-bottom: solid 2px ${GRAY2};
  width: 100%;
  ${props => props.isActive && `border-color: ${GRAY3}`};
`;