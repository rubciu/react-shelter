import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import styles from './SignUpForm.module.scss';

type Inputs = {
  email: string;
  password: string;
};

type SignUpFormProps = {
  onSubmit: SubmitHandler<Inputs>;
};

const SignUpForm = ({ onSubmit }: SignUpFormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onBlur' });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field}>
        <label htmlFor='email'>Email</label>
        <div className={styles.input}>
          <input
            id='email'
            {...register('email', { required: true })}
            placeholder='Email'
          />
          {errors.email && <span>Email is required!</span>}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor='password'>Password</label>
        <div className={styles.input}>
          <input
            id='password'
            {...register('password', { required: true })}
            placeholder='Password'
          />
          {errors.password && <span>Password is required!</span>}
        </div>
      </div>
      <button type='submit'>Send</button>
    </form>
  );
};

export default SignUpForm;
