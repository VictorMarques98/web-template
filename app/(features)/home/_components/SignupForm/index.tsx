import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useSignup } from "app/(features)/home/_api/signup";
import styles from "./styles.module.scss";

function useSignupForm() {
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref('password'), ''], "Passwords must match"),
  });
  const {
    mutate,
    isPending
  } = useSignup();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = handleSubmit(async (data) => mutate(data));

  return {
    register,
    submitForm,
    errors,
    isPending
  }
}

export function SignupForm() {
  const [showMoreFields, setShowMoreFields] = useState(false);
  const {
    register,
    errors,
    submitForm,
    isPending
  } = useSignupForm();

  return (
    <form
      onSubmit={submitForm}
      className={styles.container}
    >
      <div>
        <h1>Change user details</h1>
        <h2>Last updated: -</h2>
      </div>
      <div>
        <label>
          Name:
          <input
            type="text"
            {...register('name')}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            {...register('email')}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </label>
      </div>
      {showMoreFields ? (
        <>
          <div>
            <label>
              Password:
              <input
                type='password'
                {...register('password')}
              />
              {errors.password && <span>{errors.password.message}</span>}
            </label>
          </div>
          <div>
            <label>
              Confirm Password:
              <input
                type='password'
                {...register('confirmPassword')}
              />
              {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
            </label>
          </div>
          <button
            type="submit"
            disabled={isPending}
          >
            {isPending ? 'Loading...' : 'Submit'}
          </button>
        </>
      )
        :
        (
          <button
            type="button"
            onClick={() => setShowMoreFields(true)}
          >
            Show More fields
          </button>
        )
      }
    </form>
  )
}