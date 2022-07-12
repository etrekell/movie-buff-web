import React, { useState } from 'react';
import { Button, Divider, Menu, MenuItem, Typography } from '@mui/material';
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
        <MenuItem onClick={handleSettingsClick}>Settings</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </>
    );
  };

  const LoggedOutMenu = () => {
    return (
      <>
        <MenuItem onClick={handleLoginClick}>Log in</MenuItem>
        <MenuItem onClick={handleRegisterClick}>Register</MenuItem>
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
