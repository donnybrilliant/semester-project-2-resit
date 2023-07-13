import { remove } from "../api/posts/delete.mjs";
import { renderResponseMessage } from "../utils/response.mjs";

export async function deletePostHandler(event, id) {
  event.preventDefault();
  const container = document.querySelector("#deleteResponse");

  try {
    remove(id);
    renderResponseMessage("Post deleted successfully.", container, "success");
    //setTimeout(() => location.assign("/"), 1000);
  } catch (error) {
    console.log(error);
    renderResponseMessage(error.message, container, "danger");
  }
}
