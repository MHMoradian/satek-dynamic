import styled, { css } from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #89959f;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid #89959f;
  border-radius: 1.5rem;
  padding: 0.7rem 2rem;
  text-align: center;
  text-decoration: none;
  font-size: 20px;

  &:active {
    border: 1px solid #4579dc;
  }

  &:disabled {
    color: #fff;
    background-color: #c4c4c4;
  }

  ${(props) =>
    props.disabled &&
    css`
      background: #c4c4c4;
      color: #fff;
      border: 1px solid #c4c4c4;

      &:hover {
        background-color: #c4c4c4;
        border: 1px solid #c4c4c4;
      }

      &:active {
        background-color: #c4c4c4;
      }
    `}
  ${(props) =>
    props.color === "blue" &&
    !props.disabled &&
    css`
      background: #4579dc;
      color: #fff;

      &:hover {
        background-color: #134db9;
        border: 1px solid #134db9;
      }

      &:active {
        background-color: #4579dc;
      }

      &:disabled {
        background-color: #c4c4c4;
        color: #fff;
      }
    `}

    ${(props) =>
    props.color === "green" &&
    !props.disabled &&
    css`
      background: #13bf74;
      color: #fff;

      &:hover {
        background-color: #0ba863;
        border: 1px solid #0ba863;
      }

      &:active {
        background-color: #13bf74;
      }

      &:disabled {
        background-color: #c4c4c4;
        color: #fff;
      }
    `}

    ${(props) =>
    props.color === "red" &&
    !props.disabled &&
    css`
      background: #f24556;
      color: #fff;

      &:hover {
        background-color: #e41328;
        border: 1px solid #e41328;
      }

      &:active {
        background-color: #f24556;
      }

      &:disabled {
        background-color: #c4c4c4;
        color: #fff;
      }
    `}

    ${(props) =>
    props.name === "arrow" &&
    !props.disabled &&
    css`
      color: #4579dc;
      border: 1px solid #4579dc;

      &:hover {
        color: #fff;
        background-color: #4579dc;
        border: 1px solid #4579dc;
      }

      &:active {
        color: #fff;
        background-color: #4579dc;
        border: 1px solid #4579dc;
      }

      &:disabled {
        background-color: #c4c4c4;
        color: #fff;
      }

      &::before {
        content: "→";
      }
    `}
`;
