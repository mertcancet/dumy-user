import React from 'react';

import { useRouter } from 'next/router';

import styles from './styles.module.css';
import Link from 'next/link';

const SignUpForm = () => {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/dashboard');
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>MANAGE COURSES</h1>
      <h3 className={styles.title}>Sign In</h3>
      <h5 className={styles.subTitle}>Enter your credentials to access your account</h5>

      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          Email
          <input className={styles.input} placeholder="Enter your email" type="email" required />
        </label>
        <label className={styles.label}>
          Password
          <input
            className={styles.input}
            placeholder="Enter your password"
            type="password"
            required
          />
        </label>

        <button type="submit" className={styles.submit}>
          SIGN IN
        </button>
      </form>

      <div className={styles.forgot}>
        Forgot your password? <Link href="#">Reset Password</Link>
      </div>
    </div>
  );
};

export default SignUpForm;
