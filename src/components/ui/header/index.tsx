import React from 'react';

import { Bell, CaretCircleDown } from '../icons';
import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <CaretCircleDown />
      <Bell />
    </header>
  );
};

export default Header;
