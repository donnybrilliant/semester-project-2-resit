import { readAll } from "../api/posts/read.mjs";
import { setSearchListener } from "../listeners/search.mjs";
import { renderSidebarItems } from "../templates/sidebar.mjs";
import { loader } from "../utils/loader.mjs";

// Fetches all posts and renders them in the sidebar and sets the search listener
export async function renderSidebar() {
  const container = document.querySelector("#postList");

  container.classList.add("container-fluid");
  container.innerHTML = loader();

  const posts = await readAll();

  renderSidebarItems(posts, container);
  setSearchListener(posts, container);
}
