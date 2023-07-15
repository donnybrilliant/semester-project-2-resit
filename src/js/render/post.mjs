import { read } from "../api/posts/read.mjs";
import { renderPostTemplate } from "../templates/post.mjs";
import { loader } from "../utils/loader.mjs";
import { renderResponseMessage } from "../utils/response.mjs";

export async function renderPost() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  const container = document.querySelector("main");
  try {
    container.innerHTML = loader();
    container.classList.add("container-fluid", "mt-5");
    const post = await read(id);
    container.classList.remove("mt-5");
    renderPostTemplate(post, container);
  } catch (error) {
    renderResponseMessage(error, container, "danger");
  }
}
