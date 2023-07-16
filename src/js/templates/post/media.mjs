export function createImageSection(mediaData) {
  if (!mediaData) return "";

  const img = document.createElement("img");
  img.classList.add("img-fluid");
  img.src = mediaData[0].source_url;
  img.setAttribute("alt", mediaData[0].alt_text);

  return img;
}
