import { update } from "../api/posts/update.mjs";
import { renderResponseMessage } from "../utils/response.mjs";
import { loader } from "../utils/loader.mjs";
import { checkForm } from "../utils/checkForm.mjs";
import { createMedia } from "./media.mjs";

// Handles the update post form submission
export async function updatePostHandler(event, id) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const post = Object.fromEntries(formData.entries());
  post.id = id;

  checkForm(post);

  const container = document.querySelector("#updateResponse");

  try {
    container.innerHTML = loader();
    const media = await createMedia(formData, post.title);
    post.featured_media = media;
    await update(post);
    renderResponseMessage("Post updated successfully.", container, "success");
    setTimeout(() => location.reload(), 1000);
  } catch (error) {
    renderResponseMessage(error.message, container, "danger");
  }
}
