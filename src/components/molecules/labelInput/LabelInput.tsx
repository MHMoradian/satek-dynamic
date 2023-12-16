import InputExample from '@/components/atoms/exampleInput/InputExample';
import Label from '@/components/atoms/label/Label';
import React from 'react';
import styled from 'styled-components';
interface IProps {
  text: string;
  placeholder?: string;
  id?: string;
  htmlFor?: string;
  width?: string;
  type: string;
}
const LabelInput = ({
  text,
  placeholder,
  id,
  htmlFor,
  width,
  type,
}: IProps) => {
  return (
    <WrapperStyle>
      <Label text={text} htmlFor={htmlFor} />
      <InputExample
        placeholder={placeholder}
        id={id}
        width={width}
        type={type}
      />
    </WrapperStyle>
  );
};

const WrapperStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  gap: 5px;
  &:focus-within Label {
    display: inline;
  }
`;

export default LabelInput;
