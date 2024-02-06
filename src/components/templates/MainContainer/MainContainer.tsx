import { MenuItem } from "@/components/molecules/Navbar/Navbar";
import Header from "@/components/organisms/Header/Header";
import Sidebar from "@/components/organisms/Sidebar/Sidebar";
import React, { Children, FC, ReactElement, ReactNode } from "react";
import styled from "styled-components";

type TemplateProps = {
  header?: boolean;
  headerItems: { name: string; route: "#"; icon: React.ReactNode }[];
  userImage?: string;
  userName?: string;
  sidebar?: boolean;
  sidebarItems?: { name: string; route: "#"; icon: React.ReactNode }[];
  children: ReactNode | ReactElement;
};

const MainContainer: FC<TemplateProps> = ({
  header,
  headerItems,
  userImage,
  userName,
  sidebar,
  sidebarItems,
  children,
}) => {
  return (
    <>
      {header && (
        <Header
          userImage={userImage}
          userName={userName}
          menuItems={headerItems}
        />
      )}
      {sidebar && sidebarItems && <Sidebar menuItems={sidebarItems} />}
      <Flex>{children}</Flex>
    </>
  );
};

export default MainContainer;

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

const Flex = styled.main`
  margin: 2rem 10rem 2rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* justify-content: space-between; */
  /* flex-flow: column wrap; */
`;
