import { deletePostHandler } from "../handlers/deletePost.mjs";

export async function setDeletePostListener(id) {
  const deleteButton = document.querySelector("button#confirmDeleteButton");

  if (id && deleteButton) {
    deleteButton.addEventListener("click", (event) => {
      deletePostHandler(event, id);
    });
  }
}
