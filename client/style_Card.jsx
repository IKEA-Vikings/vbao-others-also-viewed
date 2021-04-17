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

  &:hover {
    text-decoration: underline;
  }
`;

export const Name = styled.h2`
  font-size: ${FONT_MED};
  font-weight: 300;
  color: ${GRAY3};
  margin: 0;
  margin-bottom: 0.25rem;
`;

export const Price = styled.h2`
  margin: 0;
  margin-bottom: 0.5rem;
`;

export const Dollar = styled.span`
  font-size: 1.5rem;
  line-height: 0.9;
`;

export const Superscript = styled.sup`
  font-size: 0.675rem;
  line-height: 1.6;
`;

export const Reviews = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 0.25rem;
  vertical-align: center;
`;

export const Heart = styled.span`
  text-align: right;
  margin: 5px;
  color: ${GRAY3};

  &:hover {
    color: black;
  }
`;

export const NumRating = styled.span`
  color: ${GRAY3};
  font-size: ${FONT_MED};
`;