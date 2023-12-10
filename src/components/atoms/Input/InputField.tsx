import styled from "styled-components";
interface InputProps {
  width: string;
  label: string;
}

enum inputStatus{
  sucsses= "success",
  failse= "failse"
}

export const InputMain: React.FC<InputProps> = ({ width,
  label}) => {
    return (
      <InputContainer >
        <InputField status={inputStatus.sucsses} width={width} type="text" />
        <InputLabel>{label}</InputLabel>
      </InputContainer>
    );
  };
  
  interface inpProps {
    status: inputStatus
  }
const InputContainer = styled.div`
  position: relative;
  margin: 1.25rem;
  direction: rtl;
`
const InputLabel = styled.label`
  position: absolute;
  top: 0.625rem;
  right: 0.75rem;
  font-size: 1rem;
  color: #89959f;
  transition: all 0.3s ease;
`

const InputField = styled.input<inpProps>`
  display: block;
  width: ${(props) => props.width};
  padding: 0.625rem;
  font-size: 1rem;
  border: ${props => props.status === inputStatus.sucsses ? "0.125rem solid #09a323" : "0.125rem solid #c40000"};
  border-radius: 1.25rem;
  outline: none;
  background-color: transparent;
  &:focus {
    border-color: #4579dc;
  }
  &:focus ~ ${InputLabel} {
    top: -1.25rem;
    font-size: 0.75rem;
    color: #89959f;
  }
`
export default InputMain