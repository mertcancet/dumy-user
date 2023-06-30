import React from 'react';

import styles from './styles.module.css';
import { GraduationCapBlue } from '../icons';

type Props = {
  variant: 'blue' | 'pink' | 'yellow' | 'yellow-grad';
  icon: React.ReactNode;
  title: 'string';
  number: number;
};

const DashboardCard: React.FC<Props> = () => {
  return (
    <div className={styles.container}>
      <GraduationCapBlue />
      <div className={styles.title}>Students</div>
      <div className={styles.number}>243</div>
    </div>
  );
};

export default DashboardCard;
