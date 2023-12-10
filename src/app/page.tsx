"use client";
import Image from "next/image";
import styles from "./page.module.css";
// import Button from "./components/atoms/Button/Button";
import ThreeButtons from "../components/molecules/ThreeButtons/ThreeButtons";
import TwoButtons from "../components/molecules/TwoButtons/TwoButtons";
import Navbar from "../components/molecules/Navbar/Navbar";
import Header from "../components/organisms/Header/Header";
import ProfileImage from "../components/atoms/ProfileImage/ProfileImage";
import NewRequestIcon from "../components/atoms/icons/NewRequestIcon";
import RequestsHistoryIcon from "../components/atoms/icons/RequestsHistoryIcon";
import NotCompletedRequests from "../components/atoms/icons/NotCompletedRequestsIcon";
import Sidebar from "../components/organisms/Sidebar/Sidebar";
import Help from "../components/atoms/icons/HelpIcon";
import HelpIcon from "../components/atoms/icons/HelpIcon";
import NotCompletedRequestsIcon from "../components/atoms/icons/NotCompletedRequestsIcon";
import RequestListIcon from "../components/atoms/icons/RequestListIcon";
import OraganizationsIcon from "../components/atoms/icons/OraganizationsIcon";
import DashboardIcon from "../components/atoms/icons/DashboardIcon";
import SettingsIcon from "../components/atoms/icons/SettingsIcon";
import Sale from "../components/templates/Template";
import { Button } from "../components/atoms/Button/Button";
import HomePage from "../components/pages/HomePage";
import InputMain from "../components/atoms/Input/InputField";

// import { WhiteButton, BlueButton } from "./components/atoms/Button/Button";
// import ThreeButtons from "./components/molecules/ThreeButtons/ThreeButtons";
// import TwoButtons from "./components/molecules/ThreeButtons/TwoButtons";
// import Header from "./components/molecules/ThreeButtons/Header/Header";

export default function Home() {
  return (
    <>
      {/* <Header
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
      <div className="container">
        <Button>NORMAL</Button>
        <Button disabled>DISABLED</Button>
        <Button color="blue">BLUE</Button>
        <Button color="green">GREEN</Button>
        <Button color="red">RED</Button>
        <Button name="arrow">RED</Button>
        <br />
        <br />
        <br />

        <TwoButtons firstText="عادی" secondText="فوری" />
        <br />
        <br />
        <ThreeButtons firstText="۸ الی ۱۵" secondText="bye" thirdText="!" />
      </div> */}
      {/* <HomePage /> */}
      <InputMain width="500px" label="ghyfkg" />
    </>
  );
}
