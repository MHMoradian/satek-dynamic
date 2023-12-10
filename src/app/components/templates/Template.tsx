import React, { Children, FC, ReactElement, ReactNode } from "react";
import styled from "styled-components";
import ThreeButtons from "../molecules/ThreeButtons/ThreeButtons";
import NewRequestIcon from "../atoms/icons/NewRequestIcon";
import NotCompletedRequestsIcon from "../atoms/icons/NotCompletedRequestsIcon";
import RequestsHistoryIcon from "../atoms/icons/RequestsHistoryIcon";
import DashboardIcon from "../atoms/icons/DashboardIcon";
import RequestListIcon from "../atoms/icons/RequestListIcon";
import OraganizationsIcon from "../atoms/icons/OraganizationsIcon";
import HelpIcon from "../atoms/icons/HelpIcon";
import Sidebar from "../organisms/Sidebar/Sidebar";
import Header from "../organisms/Header/Header";
import MainCard from "../atoms/MainCard/MainCard";

type TemplateProps = {
  children: ReactNode | ReactElement;
};

const Template: FC<TemplateProps> = ({ children }) => {
  return (
    <>
      <Header
        userImage="https://avatars.githubusercontent.com/u/88085664?s=48&v=4"
        userName="مرادیان"
        menuItems={[
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
      />
      <Sidebar
        menuItems={[
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
            name: "راهنما",
            route: "#",
            icon: <HelpIcon />,
          },
        ]}
      />
      <MainCard></MainCard>
    </>
  );
};

export default Template;
