import React from 'react';

import { DashboardHeader, Pagination, StudentListTable } from '@/components/ui';
import styles from './styles.module.css';

const DashboardStudentsPage = () => {
  return (
    <div className={styles.container}>
      <DashboardHeader />
      <StudentListTable />
      <Pagination />
    </div>
  );
};

export default DashboardStudentsPage;
