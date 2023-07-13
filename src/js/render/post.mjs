import { read } from "../api/posts/read.mjs";
import { renderPostTemplate } from "../templates/post.mjs";

export async function renderPost() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  const container = document.querySelector("main");
  if (container) {
    const post = await read(id);
    console.log(post);
    renderPostTemplate(post, container);
  }
}
