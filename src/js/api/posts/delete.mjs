import { URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

export async function remove(id) {
  if (!id) {
    throw new Error("Deleting a post requires an ID");
  }
  const deletePostURL = URL + "/wp/v2/posts/" + id;
  const method = "delete";

  const response = await authFetch(deletePostURL, {
    method,
  });

  const result = await response.json();

  if (response.ok) {
    return result;
  }

  if (!response.ok) {
    const error = result.message
      ? result.message
      : "There was an error deleting the post.";
    throw new Error(error);
  }
}
