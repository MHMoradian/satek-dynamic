import styled from "styled-components";

interface TextAreaProps {
  width?: string;
  height?: string;
  flex?: string;
}

export const Textarea = styled.textarea<TextAreaProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  flex: ${(props) => props.flex};
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
