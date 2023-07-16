import { remove } from "../utils/storage.mjs";

// Sets the logout listener and removes the token and user from storage
export function setLogoutListener() {
  const button = document.querySelector("li#logOutButton");

  if (button) {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      remove("token");
      remove("user");
      window.location.assign("./");
    });
  }
}
