import React, { useCallback, useEffect, useState } from 'react';

import { DashboardHeader, Pagination, StudentListTable } from '@/components/ui';
import styles from './styles.module.css';

import { User } from '@/types/user';
import { Pagination as PaginationType } from '@/types/pagination';

const DashboardStudentsPage = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [pagination, setPagination] = useState<PaginationType>({
    limit: 5,
    skip: 0,
  });

  const getAllUser = useCallback(() => {
    fetch(`https://dummyjson.com/users?limit=${pagination.limit}&skip=${pagination.skip}`)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.users);
        setPagination({ limit: res.limit, skip: res.skip, total: res.total });
      });
  }, [pagination.limit, pagination.skip]);

  useEffect(() => {
    getAllUser();
  }, [pagination.limit, pagination.skip]);
  console.log(pagination.skip);
  return (
    <div className={styles.container}>
      <DashboardHeader />
      {users && <StudentListTable users={users} />}
      {users && <Pagination pagination={pagination} setPagination={setPagination} />}
    </div>
  );
};

export default DashboardStudentsPage;
