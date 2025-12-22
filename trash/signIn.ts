import apiRequest from "./apiRequest.js";
import type { Employee } from "./types";
import "./scss/sign-in.scss";

interface LoginResponse {
  message: string;
  user: Employee;
}

document.addEventListener("DOMContentLoaded", () => {
  const rememberInput = document.getElementById(
    "remember-me",
  ) as HTMLInputElement | null;

  if (sessionStorage.getItem("user") || localStorage.getItem("user")) {
    window.location.href = "/index.html";
    return;
  }

  const form = document.getElementById(
    "sign-in-form",
  ) as HTMLFormElement | null;
  const emailInput = document.getElementById(
    "email",
  ) as HTMLInputElement | null;
  const passwordInput = document.getElementById(
    "password",
  ) as HTMLInputElement | null;
  const errorDisplay = document.getElementById("message") as HTMLElement | null;

  if (form && emailInput && passwordInput) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (errorDisplay) errorDisplay.textContent = "";

      try {
        // Call backend
        const response = await apiRequest<LoginResponse>("sign-in", "POST", {
          email: emailInput.value,
          password: passwordInput.value,
        });

        if (response && response.user) {
          //Remember user in Session Storage or Local Storage
          rememberInput && rememberInput.checked
            ? localStorage.setItem("user", JSON.stringify(response.user))
            : sessionStorage.setItem("user", JSON.stringify(response.user));

          //Redirect to main pagem
          window.location.href = "/index.html";
        }
      } catch (error: any) {
        if (errorDisplay) {
          errorDisplay.textContent = error.message || "Invalid credentials";
        }
      }
    });
  }
});
