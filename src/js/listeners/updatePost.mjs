import { read } from "../api/posts/read.mjs";
import { remove } from "../api/posts/delete.mjs";
import { updatePostHandler } from "../handlers/updatePost.mjs";

export async function setUpdatePostListener(post) {
  const form = document.querySelector("#updatePostForm");

  if (form && post) {
    const data = post;

    //Place this somewhere else with delete-stuff?
    document.querySelector(
      "#deletePostModal .modal-body"
    ).innerHTML = `Are you sure you want to delete "<b>${data.title.rendered}</b>"?`;

    form.title.value = data.title.rendered;
    form.excerpt.value = data.excerpt.rendered.slice(3).slice(0, -5);
    if (data.content.rendered.startsWith("<p>")) {
      form.content.value = data.content.rendered.slice(3).slice(0, -5);
    } else {
      form.content.value = data.content.rendered;
    }
  }

  form.addEventListener("submit", (event) => {
    updatePostHandler(event, post.id);
  });
}
