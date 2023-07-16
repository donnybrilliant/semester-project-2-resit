import { loginHandler } from "../handlers/login.mjs";

// Sets up the login form listener
export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");
  if (form) {
    form.addEventListener("submit", loginHandler);
  }
}
