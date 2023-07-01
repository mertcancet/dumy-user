import React from 'react';

import styles from './styles.module.css';
import StudentListTableItem from '../student-list-table-item';

const StudentListTable = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div></div>
        <div>Name</div>
        <div>Email</div>
        <div>Phone</div>
        <div>Website</div>
        <div>Company Name</div>
        <div></div>
      </div>
      <StudentListTableItem />
    </div>
  );
};

export default StudentListTable;
