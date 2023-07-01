import React from 'react';

import { DashboardHeader, StudentListTable } from '@/components/ui';
import styles from './styles.module.css';

const DashboardStudentsPage = () => {
  return (
    <div className={styles.container}>
      <DashboardHeader />
      <StudentListTable />
    </div>
  );
};

export default DashboardStudentsPage;
