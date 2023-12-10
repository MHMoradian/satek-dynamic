import styled from "styled-components";
import { MainHeading } from "../../atoms/MainHeading/MainHeading";
import Template from "../../templates/Template";
import { SecondaryHeading } from "../../atoms/SecondaryHeading/SecondaryHeading";
import ThreeButtons from "../../molecules/ThreeButtons/ThreeButtons";
import { Card } from "../../atoms/Card/Card";

const SalePage = () => {
  return (
    <Template>
      <Card $width="800px" $height="1000px">
        <CardContentContainer>
          <MainHeading>تعهدات مکانی و زمانی</MainHeading>
          <br />
          <br />
          <input type="select" style={{ width: "400px" }} />
          <SecondaryHeading>انتخاب استان های منتخب</SecondaryHeading>
          <SecondaryHeading>ساعات سرویس دهی</SecondaryHeading>
          <ThreeButtons
            firstText="۸ الی ۱۵"
            secondText="۸ الی ۲۲"
            thirdText="شبانه روز"
            className="sale-three-buttons"
          />
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

  .three-buttons-first {
    width: 100%;
  }
  .three-buttons-second {
    width: 100%;
  }
  .three-buttons-third {
    width: 100%;
  }
`;
