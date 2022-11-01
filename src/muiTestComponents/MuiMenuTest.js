import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

export const MuiMenuTest = () => {
  const [anchorElement, setAnchorElement] = useState(null);
  const open = Boolean(anchorElement);

  const handleClick = (event) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <>
      <Button
        id='resources-button'
        onClick={handleClick}
        aria-controls={open ? 'resources-menu' : undefined}
        aria-haspopup={open ? 'true' : undefined}
        endIcon={<KeyboardArrowDown />}
      >
        Resources
      </Button>
      <Menu
        id='resources-menu'
        anchorEl={anchorElement}
        open={open}
        MenuListProps={{ 'aria-labelledby': 'resources-button' }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Blog</MenuItem>
        <MenuItem onClick={handleClose}>Podcast</MenuItem>
      </Menu>
    </>
  );
};
