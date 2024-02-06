import styled from "styled-components";
import { MainHeading } from "../../atoms/MainHeading/MainHeading";
import Template from "../../templates/Template";
import { SecondaryHeading } from "../../atoms/SecondaryHeading/SecondaryHeading";
import ThreeButtons from "../../molecules/ThreeButtons/ThreeButtons";
import { Card } from "../../atoms/Card/Card";
import { Textarea } from "../../atoms/Textarea/Textarea";
import { Button } from "../../atoms/Button";
import LabelInput from "@/components/molecules/labelInput/LabelInput";
import { useForm } from "react-hook-form";
import NewRequestIcon from "@/components/atoms/icons/NewRequestIcon";
import NotCompletedRequestsIcon from "@/components/atoms/icons/NotCompletedRequestsIcon";
import RequestsHistoryIcon from "@/components/atoms/icons/RequestsHistoryIcon";
import DashboardIcon from "@/components/atoms/icons/DashboardIcon";
import RequestListIcon from "@/components/atoms/icons/RequestListIcon";
import OraganizationsIcon from "@/components/atoms/icons/OraganizationsIcon";
import SettingsIcon from "@/components/atoms/icons/SettingsIcon";
import HelpIcon from "@/components/atoms/icons/HelpIcon";
import MainContainer from "@/components/templates/MainContainer/MainContainer";
import PageItem from "@/components/organisms/PageItem/PageItem";
import TestComponent from "@/components/organisms/TestComponent/TestComponent";
const TestingPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = (data: any) => {
    console.log(data);
  };
  return (
    <MainContainer
      header={true}
      headerItems={[
        {
          name: "ثبت درخواست جدید",
          route: "#",
          icon: <NewRequestIcon />,
        },
        {
          name: "درخواست های تکمیل نشده",
          route: "#",
          icon: <NotCompletedRequestsIcon />,
        },
        {
          name: "تاریخچه درخواست ها",
          route: "#",
          icon: <RequestsHistoryIcon />,
        },
      ]}
      userImage="https://avatars.githubusercontent.com/u/88085664?s=48&v=4"
      userName="مرادیان"
      sidebar={true}
      sidebarItems={[
        {
          name: "داشبورد",
          route: "#",
          icon: <DashboardIcon />,
        },
        {
          name: "درخواست‌ها",
          route: "#",
          icon: <RequestListIcon />,
        },
        {
          name: "سازمان",
          route: "#",
          icon: <OraganizationsIcon />,
        },
        {
          name: "تنظیمات",
          route: "#",
          icon: <SettingsIcon />,
        },
        {
          name: "راهنما",
          route: "#",
          icon: <HelpIcon />,
        },
      ]}
    >
      <TestComponent />
      <TestComponent />
      <PageItem>
        <TestComponent flexGrow={1} />
        <TestComponent flexGrow={2} />
      </PageItem>
    </MainContainer>
  );
};

export default TestingPage;

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
