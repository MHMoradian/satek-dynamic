import styled from "styled-components";
import { Button, ToggleButton } from "../../atoms/Button/Button";
import { useState } from "react";

type ThreeButtonsProps = {
  firstText: string;
  secondText: string;
  thirdText: string;
  className?: string;
};

const ThreeButtons = ({
  firstText,
  secondText,
  thirdText,
  className,
}: ThreeButtonsProps) => {
  const types = [firstText, secondText, thirdText];
  const [active, setActive] = useState(types[0]);
  return (
    <ThreeButtonsStyle className={className}>
      <ToggleButton
        onClick={(e) => {
          e.preventDefault();
          setActive(types[0]);
        }}
        active={active === types[0]}
        className="three-buttons-first"
      >
        {firstText}
      </ToggleButton>
      <ToggleButton
        onClick={(e) => {
          e.preventDefault();
          setActive(types[1]);
        }}
        active={active === types[1]}
        className="three-buttons-second"
      >
        {secondText}
      </ToggleButton>
      <ToggleButton
        onClick={(e) => {
          e.preventDefault();
          setActive(types[2]);
        }}
        active={active === types[2]}
        className="three-buttons-third"
      >
        {thirdText}
      </ToggleButton>
    </ThreeButtonsStyle>
  );
};

export const ThreeButtonsStyle = styled.div`
  display: flex;
  border: none;
  border-radius: 1.5rem;

  button {
    height: 2.75rem;
  }

  .three-buttons-first {
    border: 1px solid #89959f;
    border-left: none;
    border-radius: 0rem 1.5rem 1.5rem 0rem;
    width: 100%;

    &:hover {
      color: #fff;
      background-color: #4579dc;
      border: 1px solid #4579dc;
      border-left: none;
    }
    &:hover + .three-buttons-second {
      border-right: 1px solid transparent;
    }

    &:active {
      color: #fff;
      background-color: #4579dc;
      border: 1px solid #4579dc;
      border-left: none;
    }
    &:active + .three-buttons-second {
      border-right: 1px solid transparent;
    }
  }

  .three-buttons-second {
    border-radius: 0;
    border: 1px solid #89959f;
    border-left: none;
    width: 100%;

    &:hover {
      color: #fff;
      background-color: #4579dc;
      border: 1px solid #4579dc;
      border-left: none;
    }
    &:hover + .three-buttons-third {
      border-right: 1px solid transparent;
    }

    &:active {
      color: #fff;
      background-color: #4579dc;
      border: 1px solid #4579dc;
      border-left: none;
    }
    &:active + .three-buttons-third {
      border-right: 1px solid transparent;
    }
  }

  .three-buttons-third {
    border: 1px solid #89959f;
    border-radius: 1.5rem 0rem 0rem 1.5rem;
    width: 100%;

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
  }
`;
export default ThreeButtons;
