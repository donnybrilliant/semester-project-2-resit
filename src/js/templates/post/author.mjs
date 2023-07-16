export function createAuthorSection(authorData) {
  const authorSection = document.createElement("div");
  authorSection.classList.add("d-flex", "align-items-center", "me-3", "author");

  const avatar = document.createElement("img");
  avatar.classList.add("rounded-circle", "me-2");
  avatar.src = authorData.avatar_urls["48"];

  const authorName = document.createElement("p");
  authorName.classList.add("mt-3");
  authorName.innerText = authorData.name;

  authorSection.append(avatar, authorName);

  return authorSection;
}
