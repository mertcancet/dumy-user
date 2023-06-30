import React from 'react';

import styles from './styles.module.css';

const DashboardHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Students List</div>
      <div className={styles.action}>
        <input placeholder="Search..." className={styles.search} />
        <button className={styles.add}>ADD NEW STUDENT</button>
      </div>
    </div>
  );
};

export default DashboardHeader;
