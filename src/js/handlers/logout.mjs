import { remove } from "../utils/storage.mjs";

export function setLogoutListener() {
  const button = document.querySelector("li#logOutButton");

  if (button) {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      remove("token");
      remove("user");
      location.href = "/";
    });
  }
}
