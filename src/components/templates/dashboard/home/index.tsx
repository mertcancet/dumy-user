import React from 'react';

import styles from './styles.module.css';
import { DashboardCard } from '@/components/ui';
import { BookmarkPink, GraduationCapBlue, UsdSquareYellow, User } from '@/components/ui/icons';

const DashboardHome = () => {
  return (
    <div className={styles.container}>
      <DashboardCard
        variant="blue"
        title="Students"
        number={243}
        icon={<GraduationCapBlue width={48} height={38} />}
      />
      <DashboardCard
        variant="pink"
        title="Course"
        number={13}
        icon={<BookmarkPink width={28} height={35} />}
      />
      <DashboardCard
        variant="yellow"
        title="Payment"
        number="556,000₺"
        icon={<UsdSquareYellow width={35} height={40} />}
      />
      <DashboardCard
        variant="yellow-grad"
        title="Users"
        number={3}
        icon={<User width={34} height={34} />}
      />
    </div>
  );
};

export default DashboardHome;
