import { createPostHandler } from "../handlers/createPost.mjs";

// Sets up the create post form listener
export function setCreatePostListener() {
  const form = document.querySelector("#newPostForm");
  if (form) {
    form.addEventListener("submit", createPostHandler);
  }
}
