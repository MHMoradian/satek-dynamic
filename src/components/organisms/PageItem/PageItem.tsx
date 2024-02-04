import { FC, ReactElement, ReactNode } from "react";
import styled from "styled-components";

type PageItemProps = {
  components: { componentName: ReactElement; flexGrow: number }[];
  // sidebarItems?: { name: string; route: "#"; icon: React.ReactNode }[];
  // children: ReactNode | ReactElement;
};

const PageItem: FC<PageItemProps> = ({ components }) => {
  return (
    <Flex>
      {components.map((component, i) => (
        <div style={{ flexGrow: component.flexGrow }} key={i}>
          {component.componentName}
        </div>
      ))}
    </Flex>
  );
};

export default PageItem;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;
`;
