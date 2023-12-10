import styled from "styled-components";
import { Button } from "../../atoms/Button/Button";

type TwoButtonsProps = {
  firstText: string;
  secondText: string;
};
const TwoButtons = ({ firstText, secondText }: TwoButtonsProps) => {
  return (
    <TwoButtonsStyle>
      <Button className="two-buttons-first">{firstText}</Button>
      <Button className="two-buttons-second">{secondText}</Button>
    </TwoButtonsStyle>
  );
};

export const TwoButtonsStyle = styled.div`
  display: inline-flex;
  border: none;
  border-radius: 1.5rem;

  .two-buttons-first {
    border: 1px solid #89959f;
    border-left: none;
    border-radius: 0;
    border-radius: 0rem 1.5rem 1.5rem 0rem;

    &:hover {
      border: 1px solid #4579dc;
      border-left: none;
      color: #fff;
      background-color: #4579dc;
    }
    &:hover + .two-buttons-second {
      border-right: 1px solid transparent;
    }

    &:active {
      border: none;
      color: #fff;
      background-color: #4579dc;
      border: 1px solid #4579dc;
    }
    &:active + .two-buttons-second {
      border: none;
    }
  }

  .two-buttons-second {
    border: 1px solid #89959f;
    border-radius: 1.5rem 0rem 0rem 1.5rem;

    &:hover {
      border: 1px solid #4579dc;
      color: #fff;
      background-color: #4579dc;
    }

    &:active {
      color: #fff;
      background-color: #4579dc;
      border: 1px solid #4579dc;
    }
  }
`;

export default TwoButtons;
