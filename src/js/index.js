import { setLoginFormListener } from "./listeners/login.mjs";
import { renderSidebar } from "./render/sidebar.mjs";
import { renderPost } from "./render/post.mjs";
import { renderNav } from "./render/nav.mjs";
import { setCreatePostListener } from "./listeners/createPost.mjs";
import { loggedIn } from "./utils/loggedIn.mjs";
import { setUpdatePostListener } from "./listeners/updatePost.mjs";
import { setDeletePostListener } from "./listeners/deletePost.mjs";
import { renderCategories } from "./render/categories.mjs";
import { setUpMenu } from "./utils/menu.mjs";

setUpMenu();
renderSidebar();
renderCategories();

if (!loggedIn()) {
  setLoginFormListener();
}

// should check if post exists before rendering
const url = new URL(location.href);
const id = url.searchParams.get("id");
if (id) renderPost();

if (loggedIn()) {
  renderNav();
  setCreatePostListener();
}

// unneccessary to do 2 api calls for same post!
// pass the data from renderPost to setUpdatePostListener
if (loggedIn() && id) {
  setUpdatePostListener();
  setDeletePostListener();
}
