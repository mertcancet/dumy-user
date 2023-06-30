import React from 'react';

import Sidebar from '../sidebar';
import Header from '../header';
import styles from './styles.module.css';

type Props = { children: React.ReactNode };

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
