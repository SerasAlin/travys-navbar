import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  IconButton,
  TextField,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { NAV_DATA } from "@/global/constants";
import { NavDataKey } from "@/global/types";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";

interface PrimaryNavProps {
  onTabChange: (tab: keyof typeof NAV_DATA) => void;
}

export default function PrimaryNav({ onTabChange }: PrimaryNavProps) {
  const [selectedTab, setSelectedTab] = useState<NavDataKey>("Voyageurs");
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  const handleTabChange = (
    event: React.SyntheticEvent,
    newValue: NavDataKey,
  ) => {
    setSelectedTab(newValue);
    onTabChange(newValue);
  };

  return (
    <StyledAppBar position="static">
      <Tabs
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="primary navigation"
        textColor="inherit"
        indicatorColor="secondary"
      >
        {Object.keys(NAV_DATA).map((tab) => (
          <Tab
            sx={{
              textTransform: "capitalize",
            }}
            key={tab}
            label={tab}
            value={tab}
          />
        ))}
      </Tabs>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {!searchOpen ? (
          <IconButton
            color="inherit"
            onClick={handleSearchToggle}
            sx={{ ml: "auto" }}
          >
            <Typography variant="body1" sx={{ marginRight: 2 }}>
              <SearchIcon />
            </Typography>
          </IconButton>
        ) : (
          <Box sx={{ textAlign: "center" }}>
            <TextField
              slotProps={{
                input: {
                  style: {
                    color: "white",
                  },
                },
              }}
              size="small"
              variant="standard"
              placeholder="Search..."
              fullWidth
            />
          </Box>
        )}
        <Typography variant="body1" sx={{ marginRight: 2 }}>
          <LanguageIcon />
        </Typography>
      </div>
    </StyledAppBar>
  );
}

const StyledAppBar = styled(AppBar)`
  background-color: #d32f2f;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: fit-content;
  margin-left: auto;
  padding: 0.25rem 2rem 0.25rem 2rem;
  border-radius: 1rem 0 0 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
    align-items: end;
  }

  @media (max-width: 600px) {
    .MuiTabs-flexContainer {
      flex-wrap: wrap;
      justify-content: end;
    }
  }
`;
