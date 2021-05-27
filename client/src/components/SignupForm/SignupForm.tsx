import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  email: string;
  password: string;
};

type SignUpFormProps = {
  onSubmit: SubmitHandler<Inputs>;
};

// const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

const SignupForm = ({ onSubmit }: SignUpFormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onBlur' });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='email'>Email</label>
      <input
        id='email'
        {...register('email', { required: true })}
        placeholder='Email'
      />
      {errors.email && <span>Email is required!</span>}

      <label htmlFor='password'>Password</label>
      <input
        id='password'
        {...register('password', { required: true })}
        placeholder='Password'
      />
      {errors.password && <span>Password is required!</span>}

      <input type='submit' />
    </form>
  );
};

export default SignupForm;
