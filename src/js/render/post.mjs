import { read } from "../api/posts/read.mjs";
import { renderPostTemplate } from "../templates/post.mjs";
import { loader } from "../utils/loader.mjs";
import { renderResponseMessage } from "../utils/response.mjs";
import { setUpdatePostListener } from "../listeners/updatePost.mjs";
import { setDeletePostListener } from "../listeners/deletePost.mjs";
import { loggedIn } from "../utils/loggedIn.mjs";

export async function renderPost(id) {
  const container = document.querySelector("main");
  try {
    container.classList.add("container-fluid", "mt-5");
    container.innerHTML = loader();
    const post = await read(id);
    container.classList.remove("mt-5");
    renderPostTemplate(post, container);
    if (loggedIn()) {
      setUpdatePostListener(post);
      setDeletePostListener(post.id);
    }
  } catch (error) {
    renderResponseMessage(error, container, "danger");
  }
}
