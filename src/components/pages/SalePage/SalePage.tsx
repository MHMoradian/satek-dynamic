import styled from "styled-components";
import { MainHeading } from "../../atoms/MainHeading/MainHeading";
import Template from "../../templates/Template";
import { SecondaryHeading } from "../../atoms/SecondaryHeading/SecondaryHeading";
import ThreeButtons from "../../molecules/ThreeButtons/ThreeButtons";
import InputMain from "../../atoms/Input/InputField";
import { Card } from "../../atoms/Card/Card";
import { Textarea } from "../../atoms/Textarea/Textarea";
import { Button } from "../../atoms/Button";
import { useForm } from "react-hook-form";
import { log } from "console";

const SalePage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      whitinCity: "",
      WhitinProvince: "",
      selectedProvince: "",
      national: "",
    },
  });

  // console.log(errors);
  console.log(watch("whitinCity"));

  return (
    <Template>
      <Card $width="50rem" $height="100%">
        <CardContentContainer>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <MainHeading>تعهدات مکانی و زمانی</MainHeading>
            <div className="four-inputs-container">
              <div className="input-container">
                <label>داخل شهری</label>
                <input
                  {...register("whitinCity", {
                    required: "this is required",
                    minLength: { value: 4, message: "min length is 4" },
                  })}
                  width="100%"
                />
              </div>
              <div className="input-container">
                <label>داخل استانی</label>
                <input {...register("WhitinProvince")} width="100%" />
              </div>
              <div className="input-container">
                <label>استان های منتخب</label>
                <input {...register("selectedProvince")} width="100%" />
              </div>
              <div className="input-container">
                <label>کشوری</label>
                <input {...register("national")} width="100%" />
              </div>
            </div>
            <SecondaryHeading>انتخاب استان های منتخب</SecondaryHeading>
            <Textarea $width="100%" $height="9rem" />
            <SecondaryHeading>ساعات سرویس دهی</SecondaryHeading>
            <ThreeButtons
              firstText="۸ الی ۱۵"
              secondText="۸ الی ۲۲"
              thirdText="شبانه روز"
              className="sale-three-buttons"
            />
            <div className="buttons-container">
              <Button type="submit" color="blue">
                تایید
              </Button>
              <Button>انصراف</Button>
            </div>
          </form>
        </CardContentContainer>
      </Card>
    </Template>
  );
};

export default SalePage;

const CardContentContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  h2 {
    margin-top: 1rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .three-buttons-first {
    width: 100%;
  }
  .three-buttons-second {
    width: 100%;
  }
  .three-buttons-third {
    width: 100%;
  }

  .four-inputs-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 2rem;
    column-gap: 3rem;
    margin-top: 3rem;

    /* div {
      margin: 1rem 0;
    } */

    .input-container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  .buttons-container {
    margin: 2rem 0;
    display: flex;
    justify-content: flex-end;
    button {
      width: 10rem;
      margin: 0.5rem;
    }
  }
`;

{
  /* <form
onSubmit={handleSubmit((data) => {
  console.log(data);
})}
>
<input
  {...register("firstName", {
    required: "this is required",
    minLength: { value: 4, message: "min length is 4" },
  })}
  placeholder="first name"
/>
<p> {errors.firstName?.message} </p>
<input
  {...register("lastName", {
    required: "this is required",
    minLength: { value: 4, message: "min length is 4" },
  })}
  placeholder="last name"
/>
<input type="submit" />
</form> */
}
