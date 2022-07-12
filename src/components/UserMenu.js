import React, { useState } from 'react';
import { Button, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { SmallAvatar } from './SmallAvatar';
import { BasicDialog } from './BasicDialog';
import { LoginFormDialog } from './LoginFormDialog';
import { RegisterFormDialog } from './RegisterFormDialog';

export const UserMenu = ({ user, logout, login, register }) => {
  const [anchorElement, setAnchorElement] = useState(null);
  const [showDialog, setShowDialog] = useState('none');
  const open = Boolean(anchorElement);

  const handleLogoutClick = () => {
    setShowDialog('logout');
    setAnchorElement(null);
  };

  const handleSettingsClick = () => {
    setShowDialog('settings');
    setAnchorElement(null);
  };

  const handleRegisterClick = () => {
    setShowDialog('register');
    setAnchorElement(null);
  };

  const handleLoginClick = () => {
    setShowDialog('login');
    setAnchorElement(null);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  const LoggedInMenu = () => {
    return (
      <>
        <Typography sx={{ paddingLeft: '14px' }} align='center' color='inherit' variant='h6' component='span'>
          {user?.displayName ?? ''}
        </Typography>
        <Divider sx={{ paddingTop: '6px' }} />
        <MenuItem onClick={handleSettingsClick}>
          <ListItemIcon>
            <SettingsOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleLogoutClick}>
          <ListItemIcon>
            <LogoutOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </>
    );
  };

  const LoggedOutMenu = () => {
    return (
      <>
        <MenuItem onClick={handleLoginClick}>
          <ListItemIcon>
            <LoginOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Login</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleRegisterClick}>
          <ListItemIcon>
            <AppRegistrationOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Register</ListItemText>
        </MenuItem>
      </>
    );
  };

  return (
    <>
      <Button
        id='user-options-button'
        onClick={(event) => setAnchorElement(event.currentTarget)}
        aria-controls={open ? 'user-options-button' : undefined}
        aria-haspopup={open ? 'true' : undefined}>
        <SmallAvatar displayName={user?.displayName} imageURL={user?.photoURL} />
      </Button>
      <Menu
        id='user-options-menu'
        anchorEl={anchorElement}
        open={open}
        onClose={handleClose}
        MenuListProps={{ 'aria-labelledby': 'user-options-button' }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
        {user ? <LoggedInMenu /> : <LoggedOutMenu />}
      </Menu>
      <BasicDialog
        showDialog={showDialog === 'settings'}
        setShowDialog={setShowDialog}
        title='Settings'
        body='No current settings options. Coming soon!'
      />
      <BasicDialog
        showDialog={showDialog === 'logout'}
        setShowDialog={setShowDialog}
        title='Are you sure you want to logout?'
        secondaryAction={() => setShowDialog('none')}
        primaryButtonText='Yes'
        primaryAction={logout}
      />
      <LoginFormDialog showDialog={showDialog === 'login'} setShowDialog={setShowDialog} onSubmit={login} />
      <RegisterFormDialog showDialog={showDialog === 'register'} setShowDialog={setShowDialog} onSubmit={register} />
    </>
  );
};
