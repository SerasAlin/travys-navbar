import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

interface DropdownMenuProps {
  title: string;
  options?: string[];
}

const DropdownNavButton: React.FC<DropdownMenuProps> = ({ title, options }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const isDropdown = !!options?.length;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <>
      <Button
        color="inherit"
        onClick={isDropdown ? handleClick : undefined}
        endIcon={isDropdown ? <ExpandMore /> : undefined}
        sx={{ textTransform: "none" }}
      >
        {title}
      </Button>
      {isDropdown && (
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {options?.map((option, index) => (
            <MenuItem key={index} onClick={handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};

export default DropdownNavButton;
