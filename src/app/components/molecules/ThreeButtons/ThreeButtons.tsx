import styled from "styled-components";
import { Button } from "../../atoms/Button/Button";

type ThreeButtonsProps = {
  firstText: string;
  secondText: string;
  thirdText: string;
};

const ThreeButtons = ({
  firstText,
  secondText,
  thirdText,
}: ThreeButtonsProps) => {
  return (
    <ThreeButtonsStyle>
      <Button className="three-buttons-first">{firstText}</Button>
      <Button className="three-buttons-second">{secondText}</Button>
      <Button className="three-buttons-third">{thirdText}</Button>
    </ThreeButtonsStyle>
  );
};

export const ThreeButtonsStyle = styled.div`
  display: inline-flex;
  border: none;
  border-radius: 1.5rem;

  .three-buttons-first {
    border: 1px solid #89959f;
    border-left: none;
    border-radius: 0rem 1.5rem 1.5rem 0rem;

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
