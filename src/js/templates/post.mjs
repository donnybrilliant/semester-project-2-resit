import { createHeader } from "./post/header.mjs";
import { createDateSection } from "./post/date.mjs";
import { createAuthorSection } from "./post/author.mjs";
import { createCategoriesSection } from "./post/categories.mjs";
import { createExcerptSection } from "./post/excerpt.mjs";
import { createImageSection } from "./post/media.mjs";
import { createContentSection } from "./post/content.mjs";

// Creates the post template
function postTemplate(data) {
  const container = document.createElement("div");
  container.classList.add("container", "px-3", "post");

  const header = createHeader(data.title.rendered);
  const dateSection = createDateSection(data.date, data.modified);
  const authorSection = createAuthorSection(data._embedded.author[0]);
  const categoriesSection = createCategoriesSection(
    data._embedded["wp:term"][0]
  );
  const excerptSection = createExcerptSection(data.excerpt.rendered);
  const imgSection = createImageSection(data._embedded["wp:featuredmedia"]);
  const contentSection = createContentSection(data.content.rendered);

  const row = document.createElement("div");
  row.classList.add(
    "d-flex",
    "align-items-center",
    "justify-content-between",
    "my-3"
  );
  row.append(authorSection, dateSection);

  container.append(
    header,
    row,
    categoriesSection,
    excerptSection,
    imgSection,
    contentSection
  );

  return container;
}

// Renders the post template
export function renderPostTemplate(data, parent) {
  document.title = data.title.rendered + " | Elementarium";
  parent.innerHTML = "";
  const post = postTemplate(data);
  parent.append(post);
}
