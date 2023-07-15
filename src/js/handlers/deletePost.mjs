import { remove } from "../api/posts/delete.mjs";
import { renderResponseMessage } from "../utils/response.mjs";
import { loader } from "../utils/loader.mjs";

export async function deletePostHandler(event, id) {
  event.preventDefault();
  const container = document.querySelector("#deletePostModal .modal-body");

  try {
    container.innerHTML = loader();
    await remove(id);
    renderResponseMessage("Post deleted successfully.", container, "success");
    setTimeout(() => location.replace("/"), 1200);
  } catch (error) {
    console.log(error);
    renderResponseMessage(error.message, container, "danger");
  }
}
