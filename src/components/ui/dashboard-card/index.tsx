import React from 'react';

import cx from 'classnames';

import styles from './styles.module.css';

type Props = {
  variant: 'blue' | 'pink' | 'yellow' | 'yellow-grad';
  icon: React.ReactNode;
  title: string;
  number: number | string;
};

const DashboardCard: React.FC<Props> = ({ icon, variant = 'blue', title, number }) => {
  return (
    <div className={cx(styles.container, styles[variant])}>
      {icon}
      <div className={cx(styles.title, { [styles.white]: variant === 'yellow-grad' })}>{title}</div>
      <div className={styles.number}>{number}</div>
    </div>
  );
};

export default DashboardCard;
