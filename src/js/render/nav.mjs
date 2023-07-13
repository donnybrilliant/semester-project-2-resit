import { loggedIn } from "../utils/loggedIn.mjs";
import { read } from "../api/user/read.mjs";
import * as storage from "../utils/storage.mjs";
import { setLogoutListener } from "../handlers/logout.mjs";

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
           
            <ul class="dropdown-menu text-small" style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(0.5px, 3rem, 0px);">
              <li><a id="menu-username" class="dropdown-item" href="#">Username</a></li>
              <li><hr class="dropdown-divider"></li>
              <li id="logOutButton"><a class="dropdown-item" href="#">Log out</a></li>
            </ul>
          </div>
        `;
    profile.querySelector("img").src = user.avatar;
    profile.querySelector("#menu-username").innerText = user.user_display_name;
    setLogoutListener();
  }
}
