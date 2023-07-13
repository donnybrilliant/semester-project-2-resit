import { URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

export async function read() {
  const readUserURL = URL + "/wp/v2/users/me";
  const response = await authFetch(readUserURL);
  const result = await response.json();

  if (response.ok) {
    return result;
  }

  if (!response.ok) {
    const error = result.message ? result.message : "Could not fetch user.";
    throw new Error(error);
  }
}
