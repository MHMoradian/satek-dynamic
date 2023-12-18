import React from 'react';
import styled from 'styled-components';

export const Textarea = styled.textarea<{ $width: string; $height: string }>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  border: 1px solid #89959f;
  margin-left: auto;
  border-radius: 1rem;
  padding: 1rem;
  resize: none;
  font-size: 1rem;
  resize: none;

  &:focus {
    outline: none;
  }
`;
