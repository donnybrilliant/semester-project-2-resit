import { setLoginFormListener } from "../listeners/login.mjs";
import { renderSidebar } from "../render/sidebar.mjs";
import { renderPost } from "../render/post.mjs";
import { renderNav } from "../render/nav.mjs";
import { setCreatePostListener } from "../listeners/createPost.mjs";
import { loggedIn } from "../utils/loggedIn.mjs";
import { renderCategories } from "../render/categories.mjs";
import { setUpMenu } from "../utils/menu.mjs";

export async function setup() {
  setUpMenu();
  renderSidebar();

  if (!loggedIn()) {
    setLoginFormListener();
  }

  if (loggedIn()) {
    renderNav();
    setCreatePostListener();
    renderCategories();
  }

  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  if (id) renderPost(id);
}
