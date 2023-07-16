export function createExcerptContainer(excerpt) {
  const excerptContainer = document.createElement("div");
  excerptContainer.id = "excerpt";
  excerptContainer.classList.add("col-10", "mb-1", "small");

  if (excerpt.length > 120) {
    excerptContainer.innerHTML = `${excerpt.slice(0, 120)}...`;
  } else {
    excerptContainer.innerHTML = excerpt;
  }

  return excerptContainer;
}
