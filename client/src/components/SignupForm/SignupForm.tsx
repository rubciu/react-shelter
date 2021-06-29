import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import styles from "./SignUpForm.module.scss";

export type SignUpFormInputs = {
  name: string;
  email: string;
  password: string;
};

type SignUpFormProps = {
  onSubmit: SubmitHandler<SignUpFormInputs>;
};

const SignUpForm = ({ onSubmit }: SignUpFormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>({ mode: "onBlur" });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <div className={styles.input}>
          <input
            id="name"
            {...register("name", {
              required: "Name is required.",
            })}
            placeholder="Name"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <div className={styles.input}>
          <input
            id="email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+$/,
                message: "Please enter a valid email.",
              },
            })}
            placeholder="Email"
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="password">Password</label>
        <div className={styles.input}>
          <input
            id="password"
            {...register("password", {
              required: "Please enter a password.",
              minLength: {
                value: 7,
                message: "Password needs to be at least 7 characters.",
              },
            })}
            placeholder="Password"
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default SignUpForm;
