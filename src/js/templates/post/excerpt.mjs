export function createExcerptSection(excerptData) {
  const excerptSection = document.createElement("div");
  excerptSection.classList.add("small", "my-5");
  excerptSection.innerHTML = excerptData;

  return excerptSection;
}
