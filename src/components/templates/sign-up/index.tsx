import React from 'react';

import { SignUpForm } from '@/components/ui';
import styles from './styles.module.css';

const SignUpPage = () => {
  return (
    <div className={styles.container}>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
