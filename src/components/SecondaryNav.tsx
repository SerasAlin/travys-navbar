import { Toolbar, Typography } from "@mui/material";
import styled from "styled-components";
import { NavDataKey } from "@/global/types";
import { NAV_DATA } from "@/global/constants";
import DropdownNavButton from "@/components/DropdownNavButton";

interface SecondaryNavProps {
  selectedTab: NavDataKey;
}

export default function SecondaryNav({ selectedTab }: SecondaryNavProps) {
  return (
    <StyledToolbar>
      {NAV_DATA[selectedTab]?.map((item, index) => (
        <DropdownNavButton
          key={item}
          title={item}
          options={index % 2 ? [] : ["option 1", "option 2"]}
        />
      ))}
    </StyledToolbar>
  );
}

const StyledToolbar = styled(Toolbar)`
  background-color: #ffffff;
  color: #333333;
  display: flex;
  justify-content: flex-end;
  padding: 0 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
`;
