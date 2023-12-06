import styled from "styled-components";
import Button from "../../atoms/Button/Button";

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
  border: 1px solid #89959f;
  border-radius: 1.5rem;

  .three-buttons-first {
    border: none;
    border-left: 1px solid #89959f;
    margin: 0.1rem 0;
    border-radius: 0;
    border-radius: 0rem 1.5rem 1.5rem 0rem;

    &:hover {
      margin: 0;
      border: none;
      color: #fff;
      background-color: #4579dc;
      border: 1px solid #4579dc;
    }

    &:active {
      margin: 0;
      border: none;
      color: #fff;
      background-color: #4579dc;
      border: 1px solid #4579dc;
    }
  }

  .three-buttons-second {
    border-radius: 0;
    border: 0;
    border-left: 1px solid #89959f;
    margin: 0.1rem 0;

    &:hover {
      margin: 0;
      border: none;
      color: #fff;
      background-color: #4579dc;
      border: 1px solid #4579dc;
    }
    &:hover + .three-buttons-third {
      border: none;
    }

    &:active {
      margin: 0;
      border: none;
      color: #fff;
      background-color: #4579dc;
      border: 1px solid #4579dc;
    }
    &:active + .three-buttons-third {
      border: none;
    }
  }
  .three-buttons-third {
    border: none;
    margin: 0.1rem 0;
    border-radius: 1.5rem 0rem 0rem 1.5rem;

    &:hover {
      margin: 0;
      color: #fff;
      background-color: #4579dc;
      border: 1px solid #4579dc;
    }
    &:hover + .three-buttons-second {
      border: none;
    }

    &:active {
      margin: 0;
      color: #fff;
      background-color: #4579dc;
      border: 1px solid #4579dc;
    }
    &:active + .three-buttons-second {
      border: none;
    }
  }
`;
export default ThreeButtons;
