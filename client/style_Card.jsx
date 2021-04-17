import React from 'react';
import styled from 'styled-components';
import {FONT_SM, FONT_MED, FONT_LG, GRAY3} from './style_constants.js';

export const Image = styled.img`
  width: 100%;
  margin-bottom: 1.75rem;
`;

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0 0.625rem;
`;

export const Brand = styled.h1`
  font-size: ${FONT_MED};
  margin: 0;
  margin-bottom: 0.25rem;
`;

export const Name = styled.h2`
  font-size: ${FONT_MED};
  font-weight: 300;
  color: ${GRAY3};
  margin: 0;
  margin-bottom: 0.25rem;
`;

export const Price = styled.h2`
  font-size: ${FONT_LG};
  margin: 0;
  margin-bottom: 0.5rem;
`;

export const Reviews = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 0.25rem;
`;

export const Heart = styled.span`
  text-align: right;
  margin: 5px;
  color: ${GRAY};

  &:hover {
    color: black;
  }
`;