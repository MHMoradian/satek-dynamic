import styled from "styled-components";
import { Card } from "../../atoms/Card/Card";
import Template from "../../templates/Template";
import { Button } from "../../atoms/Button/Button";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import SortIcon from "../../atoms/icons/SortIcon";
import FilterIcon from "../../atoms/icons/FilterIcon";
import Requests from "../../molecules/Request/Requests";

const RequestsPage = () => {
  return (
    <Template>
      <ContentContainer>
        <TopButtonsContainer>
          <Button>
            <FilterIcon />
            فیلتر
          </Button>
          <Button>
            {" "}
            <SortIcon />
            مرتب سازی
          </Button>
          <SearchBar />
        </TopButtonsContainer>
        <Card width="100%" height="100%" padding="0 2rem">
          <Requests
            requestsItem={[
              {
                description:
                  "ایمپلنت استخوانی ستون فقرات پیچ های پدیکولار مهره ای",
                number: 23,
                date: "۱۳۹۹/۰۲/۱۵",
                location: "تهران-بیمارستان فوق تخصصی چشم النبیا",
              },
              {
                description:
                  "ایمپلنت استخوانی ستون فقرات پیچ های پدیکولار مهره ای",
                number: 23,
                date: "۱۳۹۹/۰۲/۱۵",
                location: "تهران-بیمارستان فوق تخصصی چشم النبیا",
              },
              {
                description:
                  "ایمپلنت استخوانی ستون فقرات پیچ های پدیکولار مهره ای",
                number: 23,
                date: "۱۳۹۹/۰۲/۱۵",
                location: "تهران-بیمارستان فوق تخصصی چشم النبیا",
              },
            ]}
          />
        </Card>
      </ContentContainer>
    </Template>
  );
};

export default RequestsPage;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10rem 0 4rem;
`;

const TopButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2.5rem;
  gap: 1.5rem;
  > button {
    color: #4579dc;
    border: none;
    font-size: 1rem;
  }
`;
