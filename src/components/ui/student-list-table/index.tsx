import React, { Dispatch, SetStateAction } from 'react';

import StudentListTableItem from '../student-list-table-item';

import styles from './styles.module.css';

import { User } from '@/types/user';

type Props = {
  users: User[];
  setUsers: Dispatch<SetStateAction<User>>;
};

const StudentListTable: React.FC<Props> = ({ users, setUsers }) => {
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
        <>
          {!user.isDeleted && (
            <StudentListTableItem key={user.id} user={user} setUsers={setUsers} />
          )}
        </>
      ))}
    </div>
  );
};

export default StudentListTable;
