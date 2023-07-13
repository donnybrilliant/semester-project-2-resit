import { deletePostHandler } from "../handlers/deletePost.mjs";

export async function setDeletePostListener() {
  const deleteButton = document.querySelector("button#confirmDeleteButton");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (id && deleteButton) {
    deleteButton.addEventListener("click", (event) => {
      deletePostHandler(event, id);
    });
  }
}
