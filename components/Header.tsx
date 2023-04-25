import React from 'react';
import SpaceXLogo from './SpaceXLogo';
import styles from './Header.module.scss';
import { Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <SpaceXLogo className={styles.logo} />
      <Typography color="white">Launch Tracker</Typography>
    </div>
  );
};

export default Header;
