import { createPostHandler } from "../handlers/createPost.mjs";

export function setCreatePostListener() {
  const form = document.querySelector("#newPostForm");
  if (form) {
    form.addEventListener("submit", createPostHandler);
  }
}
