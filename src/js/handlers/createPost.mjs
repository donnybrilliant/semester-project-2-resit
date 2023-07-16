import { create } from "../api/posts/create.mjs";
import { renderResponseMessage } from "../utils/response.mjs";
import { loader } from "../utils/loader.mjs";
import { checkForm } from "../utils/checkForm.mjs";
import { createMedia } from "./media.mjs";

// Handles the create post form submission
// Uploads the media first, then creates the post
export async function createPostHandler(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const post = Object.fromEntries(formData.entries());

  checkForm(post);

  const container = document.querySelector("#createResponse");

  try {
    container.innerHTML = loader();
    const media = await createMedia(formData, post.title);
    post.featured_media = media;
    const result = await create(post);
    renderResponseMessage("Post created successfully.", container, "success");
    setTimeout(() => location.assign(`?id=${result.id}`), 1000);
  } catch (error) {
    renderResponseMessage(error.message, container, "danger");
  }
}
