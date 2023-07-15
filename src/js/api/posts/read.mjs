import { URL } from "../constants.mjs";

export async function readAll() {
  const readPostsURL = URL + "/wp/v2/posts?_embed&per_page=100";
  const response = await fetch(readPostsURL);
  const result = await response.json();

  if (response.ok) {
    return result;
  }

  if (!response.ok) {
    const error = result.message ? result.message : "Could not fetch posts.";
    throw new Error(error);
  }
}

export async function read(id) {
  if (!id) {
    throw new Error("Requires a post ID");
  }

  const readPostURL = URL + "/wp/v2/posts/" + id + "?_embed";
  const response = await fetch(readPostURL);
  const result = await response.json();

  if (response.ok) {
    return result;
  }

  if (!response.ok) {
    const error = result.message ? result.message : "Could not fetch post.";
    throw new Error(error);
  }
}
