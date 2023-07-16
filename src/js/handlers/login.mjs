import { login } from "../api/auth/auth.mjs";
import { renderResponseMessage } from "../utils/response.mjs";
import * as storage from "../utils/storage.mjs";
import { loader } from "../utils/loader.mjs";

// Handles the login form submission and saves the token and user info
export async function loginHandler(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const user = Object.fromEntries(formData.entries());
  const container = document.querySelector("#loginResponse");
  try {
    container.innerHTML = loader();
    const result = await login(user);
    const { token, ...userInfo } = result;
    storage.save("token", token);
    storage.save("user", userInfo);
    renderResponseMessage("You are now logged in.", container, "success");
    setTimeout(() => location.reload(), 1000);
  } catch (error) {
    renderResponseMessage(error.message, container, "danger");
  }
}
