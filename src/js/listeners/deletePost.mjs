import { deletePostHandler } from "../handlers/deletePost.mjs";

// Sets up the delete post form listener
export async function setDeletePostListener(id) {
  const deleteButton = document.querySelector("button#confirmDeleteButton");

  if (id && deleteButton) {
    deleteButton.addEventListener("click", (event) => {
      deletePostHandler(event, id);
    });
  }
}
