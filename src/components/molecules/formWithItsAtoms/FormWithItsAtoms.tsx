import React from 'react';
import { useForm } from 'react-hook-form';
import InputForForm from '@/components/atoms/inputForForm/InputForForm';
import styled from 'styled-components';
import Label from '@/components/atoms/label/Label';

const FormWithItsAtoms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Container>
        <ContainerForLabelAndInput>
          <label>نام کالا</label>
          <InputForForm
            register={register}
            name="name"
            placeholder="نام کالا"
            errors={errors}
            className="mainInput"
          />
        </ContainerForLabelAndInput>

        <ContainerForThreeInput>
          <ContainerForLabelAndInput>
            <label>مهلت تحویل</label>
            <InputForForm
              register={register}
              name="time"
              placeholder="مهلت تحویل"
              errors={errors}
            />
          </ContainerForLabelAndInput>

          <ContainerForLabelAndInput>
            <label>موجودی</label>
            <InputForForm
              register={register}
              name="inventory"
              placeholder="موجودی"
              errors={errors}
            />
          </ContainerForLabelAndInput>

          <ContainerForLabelAndInput>
            <label>موردنیاز</label>
            <InputForForm
              register={register}
              name="need"
              placeholder="موردنیاز"
              errors={errors}
            />
          </ContainerForLabelAndInput>
        </ContainerForThreeInput>

        <Button type="submit">ثبت</Button>
      </Container>
    </form>
  );
};

export default FormWithItsAtoms;
const ContainerForLabelAndInput = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3px;
  label {
    font-size: 12px;
    color: #c4c4c4;
  }
`;
const ContainerForThreeInput = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 900px;
  border: 2px solid yellow;
  padding: 30px;
  border-radius: 20px;
  .mainInput {
    width: 800px;
  }
`;
const Button = styled.button`
  background-color: green;
  border-radius: 10px;
  border: none;
  width: 100px;
  height: 30px;
  align-self: self-end;
  cursor: pointer;
`;
