import styled from "styled-components";
import Button from "../../atoms/Button/Button";

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
  border: 1px solid #89959f;
  border-radius: 1.5rem;
  .two-buttons-second {
    border: none;
    margin: 0.1rem 0;
    border-radius: 1.5rem 0rem 0rem 1.5rem;

    &:hover {
      margin: 0;
      border: none;
      color: #fff;
      background-color: #4579dc;
      border: 1px solid #4579dc;
    }
    &:hover + .two-buttons-second {
      border: none;
    }

    &:active {
      margin: 0;
      border: none;
      color: #fff;
      background-color: #4579dc;
      border: 1px solid #4579dc;
    }
    &:active + .two-buttons-second {
      border: none;
    }
  }
  .two-buttons-first {
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
`;

export default TwoButtons;
