import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';

import {
  Bookmark,
  FileChartLine,
  GraduationCap,
  HomeLgAlt,
  SignOutAlt,
  SlidersVSquare,
  UsdSquare,
} from '../icons';

import styles from './styles.module.css';
import { useRouter } from 'next/router';

const sidebarItems = [
  { href: '/dashboard', name: 'Home', icon: <HomeLgAlt /> },
  { href: '/dashboard#course', name: 'Course', icon: <Bookmark /> },
  { href: '/dashboard/students', name: 'Students', icon: <GraduationCap /> },
  { href: '/dashboard#payment', name: 'Payment', icon: <UsdSquare /> },
  { href: '/dashboard#report', name: 'Report', icon: <FileChartLine /> },
  { href: '/dashboard#settings', name: 'Settings', icon: <SlidersVSquare /> },
];

const Sidebar = () => {
  const router = useRouter();
  console.log(router);
  return (
    <aside className={styles.container}>
      <div className={styles.title}>MANAGE COURSES</div>
      <div className={styles.user_info}>
        <div className={styles.avatar}>
          <Image src="/images/avatar.png" alt="avatar" width={128} height={128} />
        </div>
        <div className={styles.username}>John Doe</div>
        <div className={styles.userrole}>Admin</div>
      </div>
      <div className={styles.nav}>
        <ul className={styles.sidebar_items}>
          {sidebarItems.map((item, i) => (
            <li className={styles.item} key={i}>
              <Link
                href={item.href}
                className={cx(styles.link, { [styles.active]: item.href === router.asPath })}
              >
                {item.icon}
                {item.name}
              </Link>
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
