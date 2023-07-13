import { login } from "../api/auth/auth.mjs";
import { renderResponseMessage } from "../utils/response.mjs";
import * as storage from "../utils/storage.mjs";

export async function loginHandler(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const user = Object.fromEntries(formData.entries());
  const container = document.querySelector("#loginResponse");
  try {
    container.innerHTML = `<div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>`;
    const result = await login(user);
    const { token, ...userInfo } = result;
    storage.save("token", token);
    storage.save("user", userInfo);
    renderResponseMessage("You are now logged in.", container, "success");
    location.reload();
  } catch (error) {
    renderResponseMessage(error.message, container, "danger");
  }
}
