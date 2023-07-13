import { URL } from "../constants.mjs";
//import { authFetch } from "../authFetch.mjs";
import { load } from "../../utils/storage.mjs";

export async function create(data /*, filename */) {
  if (!data) {
    throw new Error("Create post requires a data object");
  }
  const createMediaURL = URL + "/wp/v2/media";
  const method = "post";
  const token = load("token");

  const response = await fetch(createMediaURL, {
    method,
    body: data,
    headers: {
      //"Content-Disposition": `attachment; filename=${filename}`,
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();

  if (response.ok) {
    return result;
  }

  if (!response.ok) {
    const error = result.message
      ? result.message
      : "There was an error uploading media.";
    throw new Error(error);
  }
}
