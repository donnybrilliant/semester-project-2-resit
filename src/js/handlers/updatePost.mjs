import { update } from "../api/posts/update.mjs";
import { renderResponseMessage } from "../utils/response.mjs";
import { create as createMedia } from "../api/media/create.mjs";

export async function updatePostHandler(event, id) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const post = Object.fromEntries(formData.entries());
  post.id = id;
  if (post.excerpt == "") {
    delete post.excerpt;
  }

  if (post.categories == "") {
    post.categories = [1];
  }

  const container = document.querySelector("#updateResponse");

  if (formData.get("file").name !== "") {
    formData.append("alt_text", `Featured image for ${post.title}`);
    const media = await createMedia(formData);
    post.featured_media = media.id;
  }

  try {
    const result = await update(post);
    renderResponseMessage("Post updated successfully.", container, "success");
    //setTimeout(() => location.assign(`?id=${result.id}`), 1000);
  } catch (error) {
    console.log(error);
    renderResponseMessage(error.message, container, "danger");
  }
}
