import apiRequest from "./apiRequest.js";
import "./scss/sign-up.scss";

interface SignUpResponse {
  message: string;
  payload: Payload;
}

interface Payload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("sign-up-form") as HTMLFormElement;
  const messageDisplay = document.getElementById("message") as HTMLElement;

  //Inputs
  const firstNameInput = document.getElementById(
    "first-name",
  ) as HTMLInputElement;
  const lastNameInput = document.getElementById(
    "last-name",
  ) as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const passwordInput = document.getElementById("password") as HTMLInputElement;
  const secondPasswordInput = document.getElementById(
    "second-password",
  ) as HTMLInputElement;

  // if(!form) return

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    messageDisplay.textContent = "";

    // If passwords don't match error message will be returned
    if (passHelper(passwordInput.value, secondPasswordInput.value)) {
      try {
        const payload: Payload = {
          first_name: firstNameInput?.value.trim(),
          last_name: lastNameInput?.value.trim(),
          email: emailInput?.value.trim(),
          password: passwordInput?.value.trim(),
        };
        const response = await apiRequest<SignUpResponse>(
          "sign-up",
          "POST",
          payload,
        );

        if (response) {
          messageDisplay.style.color = "green";
          messageDisplay.textContent = "User created redirecting... ";
          setTimeout(() => {
            window.location.href = "/sign-in.html";
          }, 2000);
        }
      } catch (error: any) {
        messageDisplay.style.color = "red";
        messageDisplay.textContent = error.message || "Sign up failed";
      }
    } else messageDisplay.textContent = "Password confirmation failed";
  });
});

function passHelper(firstPass: string, secondPass: string): boolean {
  return firstPass.trim() === secondPass.trim();
}
