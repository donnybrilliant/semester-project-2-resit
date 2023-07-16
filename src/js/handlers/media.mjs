import { create } from "../api/media/create.mjs";

// error handler for media?
export async function createMedia(formData, title) {
  if (formData.get("file").name !== "") {
    formData.append("alt_text", `Featured image for ${title}`);
    const media = await create(formData);
    return media.id;
  }
}
