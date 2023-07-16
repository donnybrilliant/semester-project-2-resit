export function createContentSection(contentData) {
  const contentSection = document.createElement("div");
  contentSection.classList.add("my-5", "content");
  contentSection.innerHTML = contentData;

  return contentSection;
}
