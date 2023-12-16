import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';

interface MyInputProps {
  weight?: number;
  border?: string;
  backgroundColor?: string;
  radius?: number;
}

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;

  input {
    /* border: 1px solid ${(props) => (props.isValid ? 'black' : 'red')};
    border-radius: ${(props) => props.radius}px;
    background-color: ${(props) => props.backgroundColor}; */
    padding: 5px;
  }

  label {
    position: absolute;
    top: -20px;
    color: blue;
  }

  .invalid {
    border-color: red;
  }
`;

const MyInputComponent: React.FC<MyInputProps> = ({
  weight = 300,
  border = '1px solid black',
  backgroundColor = 'white',
  radius = 5,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<{ inputValue: string }> = ({ inputValue }) => {
    console.log('Submitted value:', inputValue);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper
        radius={radius}
        backgroundColor={backgroundColor}
        isValid={!errors.inputValue}
      >
        <input
          type="text"
          style={{ fontWeight: weight, border }}
          {...register('inputValue', { required: true })}
          onChange={(e) => setValue('inputValue', e.target.value)}
        />
        <label>{errors.inputValue ? '❌' : 'Label'}</label>
        {errors.inputValue && (
          <span className="invalid" role="alert">
            This field is required
          </span>
        )}
      </InputWrapper>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyInputComponent;
