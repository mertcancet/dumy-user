import React from 'react';

import StudentListTableItem from '../student-list-table-item';

import styles from './styles.module.css';

import { User } from '@/types/user';

type Props = {
  users: User[];
};

const StudentListTable: React.FC<Props> = ({ users }) => {
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

      {users.map((user) => (
        <StudentListTableItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default StudentListTable;
