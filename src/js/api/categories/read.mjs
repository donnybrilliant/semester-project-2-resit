import { URL } from "../constants.mjs";

export async function read() {
  const readCategoryURL = URL + "/wp/v2/categories";
  const response = await fetch(readCategoryURL);
  const result = await response.json();

  if (response.ok) {
    return result;
  }

  if (!response.ok) {
    const error = result.message
      ? result.message
      : "Could not fetch categories.";
    throw new Error(error);
  }
}
