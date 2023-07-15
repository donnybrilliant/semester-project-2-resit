import { loggedIn } from "../utils/loggedIn.mjs";
import { read } from "../api/user/read.mjs";
import * as storage from "../utils/storage.mjs";
import { setLogoutListener } from "../handlers/logout.mjs";
import { theme } from "../utils/theme.mjs";

// Split into modules
export async function renderNav() {
  if (loggedIn()) {
    const user = storage.load("user");
    const response = await read();
    user.avatar = response.avatar_urls["48"];
    storage.save("user", user);
    const profile = document.querySelector("#profile");
    profile.innerHTML = `
        <button type="button" class="btn" data-bs-target="#newPostModal"
        data-bs-toggle="modal" data-bs-dismiss="modal" title="Add new post">
        <i class="bi bi-plus-circle"></i>
      </button>
      <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://secure.gravatar.com/avatar/b09f134e71f5fa46ca93481656d83e70?s=48&d=mm&r=g" alt="Avatar" width="32" height="32" class="rounded-circle">
        </button>
            <ul class="dropdown-menu text-small dropdown-menu-end">
              <li><span id="menu-username" class="dropdown-item disabled" href="#">Username</span></li>
              <li><hr class="dropdown-divider"></li>
              <li><span class="form-check form-switch p-1">
              <input class="form-check-input me-2" type="checkbox" role="switch" id="toggleTheme">
              <label class="form-check-label" for="toggleTheme" id="themeText">Theme</label>
            </span></li>
            <li><hr class="dropdown-divider"></li>
              <li id="logOutButton"><a class="dropdown-item" href="#">Log out</a></li>
            </ul>
          </div>
        `;
    profile.querySelector("img").src = user.avatar;
    profile.querySelector("#menu-username").innerText = user.user_display_name;
    setLogoutListener();
    theme();
  }
}
