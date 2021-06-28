import React from "react";
import { SubmitHandler } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../../helpers/hooks";
import { SignUpForm } from "../../components";

import { addNewUser, getValidationErrors } from "../../features/user/userSlice";
import type { UserInput } from "../../features/user/userSlice";

import { useHistory } from "react-router";
import { SignUpFormInputs } from "../../components/SignUpForm/SignUpForm";
import styles from "./SignUpPage.module.scss";

const SignUpPage = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const validationErrors = useAppSelector((state) =>
    getValidationErrors(state)
  );
  const handleSubmit: SubmitHandler<SignUpFormInputs> = async (
    data: UserInput
  ) => {
    const payload: any = (await dispatch(addNewUser(data))).payload; // TODO: remove any

    if (payload.user) {
      history.push("/dogs");
    }
  };

  return (
    <div>
      <h1>Sign up</h1>
      {validationErrors && validationErrors.length ? (
        <ul className={styles.errors}>
          {validationErrors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      ) : null}
      <SignUpForm onSubmit={handleSubmit} />
    </div>
  );
};

export default SignUpPage;
