import { FormEvent, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../../scss/sign-up.scss";

import InputField from "./InputField";
import { useSignUpMutation } from "../../store/api/authAPI";

import { RootState } from "../../store/store";
import { useSelector } from "react-redux";


/**
 * @async @function handleSubmit get the input values and pass to the backend for user creation
 * It happens if the passwords match and an entered email doesn't exist,
 * Email existence is checked locally, Email  from  the backend side.
 */

export default function SignUp() {
  const navigate = useNavigate();

      const currentUser = useSelector((state: RootState) => state.auth.user);
      if(currentUser)  return <Navigate to="/portal" replace />

  const [signUpFn, { isLoading, error }] = useSignUpMutation();

  // Store local error if password confirmatio failes
  const [localError, setLocalError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("first-name")?.toString().trim();
    const lastName = formData.get("last-name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString();
    const secondPassword = formData.get("second-password")?.toString();

    if (password !== secondPassword) {
      setLocalError("Password confirmation failed");
      return;
    }

    try {
      setLocalError(null);
      await signUpFn({
        first_name: firstName!,
        last_name: lastName!,
        email: email!,
        password: password!,
      }).unwrap();

      navigate("/sign-in", { replace: true });
    } catch (e) {
      console.error("sign up failed!!!", e);
    }
  }

  const errorMessage = localError || (error as any)?.data?.message;

  return (
    <>
      <p className="subtitle">
        Enter your details and become a part of our family.
      </p>

      <form id="sign-up-form" onSubmit={handleSubmit}>
        <div id="message">{errorMessage}</div>

        <div className="input-group-container">
          <InputField
            label="First Name"
            id="first-name"
            placeholder="Enter your first name"
            required
          />

          <InputField
            label="Last Name"
            id="last-name"
            placeholder="Enter your last name"
            required
          />
        </div>

        <InputField
          label="Email Address"
          id="email"
          type="email"
          placeholder="Enter your email"
          required
        />

        <InputField
          label="Password"
          id="password"
          type="password"
          placeholder="Enter your password"
          required
        />

        <InputField
          label="Confirm Password"
          id="second-password"
          type="password"
          placeholder="Repeat your password"
          required
        />

        <button type="submit" className="btn-signup">
          {isLoading ? "Creating..." : "Sign Up"}
        </button>

        <div className="extra-links">
          <p>
            Do you have an account? <Link to="/sign-in">Sign In</Link>
          </p>
        </div>
      </form>
    </>
  );
}
