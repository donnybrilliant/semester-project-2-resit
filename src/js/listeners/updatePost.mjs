import { read } from "../api/posts/read.mjs";
import { remove } from "../api/posts/delete.mjs";
import { updatePostHandler } from "../handlers/updatePost.mjs";

export async function setUpdatePostListener() {
  const form = document.querySelector("#updatePostForm");
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form && id) {
    const submitButton = form.querySelector("button[type='submit']");
    const deleteButton = form.querySelector("button#deleteButton");
    deleteButton.disabled = true;
    submitButton.disabled = true;

    const data = await read(id);

    document.querySelector(
      "#deletePostModal .modal-body"
    ).innerHTML = `Are you sure you want to delete "${data.title.rendered}"?`;

    form.title.value = data.title.rendered;
    form.excerpt.value = data.excerpt.rendered.slice(3).slice(0, -5);
    if (data.content.rendered.startsWith("<p>")) {
      form.content.value = data.content.rendered.slice(3).slice(0, -5);
    } else {
      form.content.value = data.content.rendered;
    }
    deleteButton.disabled = false;
    submitButton.disabled = false;
  }

  form.addEventListener("submit", (event) => {
    updatePostHandler(event, id);
  });
}
