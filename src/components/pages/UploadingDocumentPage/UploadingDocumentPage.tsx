import React from 'react';
import Template from '../../templates/Template';
import { Card } from '../../atoms/Card/Card';
import InputMain from '../../atoms/Input/InputField';
import styled from 'styled-components';
import { MainHeading } from '../../atoms/MainHeading/MainHeading';
import { Textarea } from '../../atoms/Textarea/Textarea';
import { Button } from '../../atoms/Button';
import LabelInput from '@/components/molecules/labelInput/LabelInput';
import { useForm } from 'react-hook-form';

const UploadingDocumentPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <Template>
      <Card width="30rem" height="100%" padding="0 2rem">
        <MainHeading>بارگذاری مدارک</MainHeading>
        <FormContainer>
          <LabelInput
            register={register}
            name="need"
            width="100%"
            placeholder="نام مدرک"
            text="نام مدرک"
            type="text"
          />
          <LabelInput
            register={register}
            name="need"
            width="100%"
            placeholder="نوع مدرک"
            text="نوع مدرک"
            type="text"
          />
          <Textarea
            placeholder="تصویر مدرک را آپلود کنید"
            className="uploading-picture"
            width="100%"
            height="10rem"
          />
          <Textarea
            className="description"
            width="100%"
            height="6rem"
            placeholder="توضیحات"
          />
          <div className="buttons-container">
            <Button type="submit" color="blue">
              تایید
            </Button>
            <Button>انصراف</Button>
          </div>
        </FormContainer>
      </Card>
    </Template>
  );
};

export default UploadingDocumentPage;

const FormContainer = styled.form`
  input {
    margin-top: 3rem;
  }

  .uploading-picture {
    border-style: dashed;
    margin-top: 3rem;
  }

  .description {
    margin-top: 3rem;
  }

  .buttons-container {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
    button {
      width: 100%;
      margin: 0.5rem;
    }
  }
`;
