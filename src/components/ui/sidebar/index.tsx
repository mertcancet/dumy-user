import React from 'react';

import styles from './styles.module.css';
import {
  Bookmark,
  FileChartLine,
  GraduationCap,
  HomeLgAlt,
  SignOutAlt,
  SlidersVSquare,
  UsdSquare,
} from '../icons';

const sidebarItems = [
  { href: '#', name: 'Home', icon: <HomeLgAlt /> },
  { href: '#', name: 'Course', icon: <Bookmark /> },
  { href: '#', name: 'Students', icon: <GraduationCap /> },
  { href: '#', name: 'Payment', icon: <UsdSquare /> },
  { href: '#', name: 'Report', icon: <FileChartLine /> },
  { href: '#', name: 'Settings', icon: <SlidersVSquare /> },
];

const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <div className={styles.title}>MANAGE COURSES</div>
      <div className={styles.user_info}>
        <div className={styles.avatar}>Avatar</div>
        <div className={styles.username}>John Doe</div>
        <div className={styles.userrole}>Admin</div>
      </div>
      <div className={styles.nav}>
        <ul className={styles.sidebar_items}>
          {sidebarItems.map((item, i) => (
            <li className={styles.item} key={i}>
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>
        <div className={styles.logout}>
          Logout
          <SignOutAlt />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
