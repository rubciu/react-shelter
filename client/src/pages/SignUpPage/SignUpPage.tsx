import React from 'react';

import { SignUpForm } from '../../components';
import styles from './SignUpPage.module.scss';

const SignUpPage = () => {
  return (
    <div>
      <h1>Sign up</h1>
      <SignUpForm onSubmit={() => console.log('Submitting...')} />
    </div>
  );
};

export default SignUpPage;
