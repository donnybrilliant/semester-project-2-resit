import { remove } from "../api/posts/delete.mjs";
import { renderResponseMessage } from "../utils/response.mjs";
import { loader } from "../utils/loader.mjs";

// Handles the delete post form submission
export async function deletePostHandler(event, id) {
  event.preventDefault();
  const container = document.querySelector("#deletePostModal .modal-body");

  try {
    container.innerHTML = loader();
    await remove(id);
    renderResponseMessage("Post deleted successfully.", container, "success");
    setTimeout(() => location.assign("./"), 1200);
  } catch (error) {
    renderResponseMessage(error.message, container, "danger");
  }
}
