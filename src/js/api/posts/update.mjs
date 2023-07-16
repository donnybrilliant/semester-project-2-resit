import { URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

// API Call: Updates a post
export async function update(data) {
  if (!data) {
    throw new Error("Update post requires a data object");
  }
  const updatePostURL = URL + "/wp/v2/posts/" + data.id;
  const method = "put";

  const response = await authFetch(updatePostURL, {
    method,
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (response.ok) {
    return result;
  }

  if (!response.ok) {
    const error = result.message
      ? result.message
      : "There was an error updating the post.";
    throw new Error(error);
  }
}
