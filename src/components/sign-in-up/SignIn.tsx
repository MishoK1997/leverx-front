import { Link, Navigate, useNavigate } from "react-router-dom";
import "../../scss/sign-in.scss";
import InputField from "./InputField";
import { FormEvent } from "react";
import { useSignInMutation } from "../../store/api/authAPI";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";

/**
 * @async @function handleSubmit is the core function that handles
 * form inputs and auth API request.
 * It also conditionally store a data of logged user into localStorage or sessionStorage
 * In case of success it redirecs on the portal
 *
 *
 * @useSignInMutation Provides RTK API call to sign in
 * @error displays an error message based on the backend response
 */

export default function SignIn() {
  const navigate = useNavigate();

  const currentUser = useSelector((state: RootState) => state.auth.user);

  const [loginFn, { isLoading, error }] = useSignInMutation();

  if (currentUser) return <Navigate to="/portal" replace />;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as "string";
    const password = formData.get("password") as "string";
    const rememberMe = formData.get("remember-me");

    try {
      const response = await loginFn({ email, password }).unwrap();

      if (response.user) {
        const userString = JSON.stringify(response.user);

        rememberMe === "on"
          ? localStorage.setItem("user", userString)
          : sessionStorage.setItem("user", userString);
      }

      navigate("/portal", { replace: true });
    } catch (e) {
      console.error("sign in failed", e);
    }
  }

  //Normalize an error message in order to display
  const errorMessage = (error as any)?.data?.message;

  return (
    <>
      <p className="subtitle">Please enter your details to sign in.</p>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div id="message"> {errorMessage}</div>
        <InputField
          id="email"
          label="Email Address"
          type="email"
          placeholder="name@company.com"
          required
        />
        <InputField
          id="password"
          label="Password"
          type="password"
          placeholder="Tell me your secret"
          required
        />

        <InputField id="remember-me" type="checkbox" label="Remember Me" />

        <button type="submit" className="btn-signin" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign In"}
        </button>

        <div className="extra-links">
          <p>
            Don't have an account? <Link to="/sign-up">Sign up</Link>
          </p>
        </div>
      </form>
    </>
  );
}
