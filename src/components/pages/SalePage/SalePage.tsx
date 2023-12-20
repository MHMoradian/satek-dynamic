import styled from 'styled-components';
import { MainHeading } from '../../atoms/MainHeading/MainHeading';
import Template from '../../templates/Template';
import { SecondaryHeading } from '../../atoms/SecondaryHeading/SecondaryHeading';
import ThreeButtons from '../../molecules/ThreeButtons/ThreeButtons';
import { Card } from '../../atoms/Card/Card';
import { Textarea } from '../../atoms/Textarea/Textarea';
import { Button } from '../../atoms/Button';
import LabelInput from '@/components/molecules/labelInput/LabelInput';
import { useForm } from 'react-hook-form';
const SalePage = () => {
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
      <Card width="50rem" height="100%" padding="0 4rem">
        <MainHeading>تعهدات مکانی و زمانی</MainHeading>
        <form>
          <InputsContainer>
            <LabelInput
              register={register}
              name="need"
              width="100%"
              placeholder="داخل شهری"
              text="داخل شهری"
              type="text"
            />
            <LabelInput
              register={register}
              name="need"
              width="100%"
              placeholder="داخل استانی"
              text="داخل استانی"
              type="text"
            />
            {/* <Textarea width="" height="9rem" flex="1" />
            <Textarea width="" height="9rem" flex="2" /> */}
            <LabelInput
              register={register}
              name="need"
              width="100%"
              placeholder="استان های منتخب"
              text="استان های منتخب"
              type="text"
            />
            <LabelInput
              register={register}
              name="need"
              width="100%"
              placeholder="کشوری"
              text="کشوری"
              type="text"
            />
          </InputsContainer>

          <SecondaryHeading fontSize="1rem" margin="1rem 0 0.5rem 0">
            انتخاب استان های منتخب
          </SecondaryHeading>
          <Textarea width="100%" height="9rem" />

          <SecondaryHeading fontSize="1rem" margin="1rem 0 0.5rem 0">
            ساعات سرویس دهی
          </SecondaryHeading>
          <ThreeButtons
            firstText="۸ الی ۱۵"
            secondText="۸ الی ۲۲"
            thirdText="شبانه روز"
            className="sale-three-buttons"
          />
          <ButtonsContainer>
            <Button type="submit" color="blue">
              تایید
            </Button>
            <Button>انصراف</Button>
          </ButtonsContainer>
        </form>
      </Card>
    </Template>
  );
};

export default SalePage;

interface InputsContainerProps {
  flex: string;
}
const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 2rem;
  column-gap: 3rem;
  margin-top: 3rem;

  /* display: flex; */
`;

const ButtonsContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: flex-end;
  button {
    width: 10rem;
    margin: 0.5rem;
  }
`;
