import { URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

// API Call: Creates a new post
export async function create(data) {
  if (!data) {
    throw new Error("Create post requires a data object");
  }
  const createPostURL = URL + "/wp/v2/posts";
  const method = "post";

  const response = await authFetch(createPostURL, {
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
      : "There was an error creating the post.";
    throw new Error(error);
  }
}
