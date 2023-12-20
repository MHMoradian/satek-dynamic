import React from 'react';
import { useForm } from 'react-hook-form';
import LabelInput from '../labelInput/LabelInput';
import styled from 'styled-components';
import { Textarea } from '@/components/atoms/Textarea/Textarea';
import { Button } from '@/components/atoms/Button';
import InputForForm from '@/components/atoms/inputForForm/InputForForm';

const FormForIndentity = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      registrationnumber: '',
      fieldofactivity: '',
      scopeofactivity: '',
      state: '',
      city: '',
      postalcode: '',
      landlinephone: '',
      email: '',
      hghgh: '',
    },
  });
  const onFormSubmit = (data: any) => {
    console.log('the form is submited');
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Container>
        <MainContainer>
          <LabelInput
            type="text"
            text="نام شرکت"
            placeholder="نام شرکت"
            width="400px"
            {...register('name')}
          />

          <LabelInput
            type="text"
            text="شماره ثبت"
            placeholder="شماره ثبت"
            width="400px"
            {...register('registrationnumber')}
          />
        </MainContainer>
        <MainContainer>
          <LabelInput
            type="text"
            text="زمینه فعالیت"
            placeholder="زمینه فعالیت"
            width="400px"
            {...register('fieldofactivity')}
          />
          <LabelInput
            type="text"
            text="دامنه فعالیت"
            placeholder="دامنه فعالیت"
            width="400px"
            {...register('scopeofactivity')}
          />
        </MainContainer>
        <MainContainer>
          <ContainerForTwoInput>
            <LabelInput
              type="text"
              text="استان"
              placeholder="استان"
              width="183px"
              {...register('state')}
            />
            <LabelInput
              type="text"
              text="شهرستان"
              placeholder="شهرستان"
              width="183px"
              {...register('city')}
            />
          </ContainerForTwoInput>
          <LabelInput
            type="text"
            text="کدپستی"
            placeholder="کدپستی"
            width="400px"
            {...register('postalcode')}
          />
        </MainContainer>
        <MainContainer>
          <LabelInput
            type="text"
            text="تلفن ثابت"
            placeholder="تلفن ثابت"
            width="400px"
            {...register('landlinephone')}
          />
          <LabelInput
            type="text"
            text="ایمیل"
            placeholder="ایمیل"
            width="400px"
            {...register('email')}
          />
        </MainContainer>
        <MainContainer>
          <Textarea placeholder="آدرس" cols={120} rows={5} />
        </MainContainer>
        <ContainerForButtons>
          <Button color="blue">تایید</Button>
          <Button>انصراف</Button>
        </ContainerForButtons>
      </Container>
    </form>
  );
};

export default FormForIndentity;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 49px;
`;
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContainerForTwoInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`;
const ContainerForButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: left;
`;
