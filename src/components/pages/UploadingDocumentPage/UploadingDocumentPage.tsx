import React from "react";
import Template from "../../templates/Template";
import { Card } from "../../atoms/Card/Card";
import InputMain from "../../atoms/Input/InputField";
import styled from "styled-components";
import { MainHeading } from "../../atoms/MainHeading/MainHeading";
import { Textarea } from "../../atoms/Textarea/Textarea";
import { Button } from "../../atoms/Button";
import LabelInput from "@/components/molecules/labelInput/LabelInput";

const UploadingDocumentPage = () => {
  return (
    <Template>
      <Card $width="30rem" $height="100%">
        <CardContentContainer>
          <form>
            <MainHeading>بارگذاری مدارک</MainHeading>
            <LabelInput
              width="100%"
              placeholder="نام مدرک"
              text="نام مدرک"
              type="text"
            />
            <LabelInput
              width="100%"
              placeholder="نوع مدرک"
              text="نوع مدرک"
              type="text"
            />
            <Textarea
              placeholder="تصویر مدرک را آپلود کنید"
              className="uploading-picture"
              $width="100%"
              $height="10rem"
            />
            <Textarea
              className="description"
              $width="100%"
              $height="6rem"
              placeholder="توضیحات"
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

export default UploadingDocumentPage;

const CardContentContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

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
