import React from 'react';
import { SubmitHandler } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '../../helpers/hooks';
import { SignUpForm } from '../../components';
import type { SignUpFormInputs } from '../../components/SignUpForm/SignUpForm';
import { addNewUser } from '../../features/user/userSlice';
import type { UserInput } from '../../features/user/userSlice';

import styles from './SignUpPage.module.scss';
import { useHistory } from 'react-router';

const SignUpPage = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const handleSubmit: SubmitHandler<SignUpFormInputs> = async (
    data: UserInput
  ) => {
    try {
      await dispatch(addNewUser(data));
      history.push('/dogs');
    } catch (error) {
      // TODO: Hanndle error
    }
  };

  return (
    <div>
      <h1>Sign up</h1>
      <SignUpForm onSubmit={handleSubmit} />
    </div>
  );
};

export default SignUpPage;
