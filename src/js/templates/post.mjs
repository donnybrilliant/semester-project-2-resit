import { dateConverter } from "../utils/date.mjs";
import { loggedIn } from "../utils/loggedIn.mjs";

export function postTemplate(data) {
  const container = document.createElement("div");
  container.classList.add("container", "px-3");
  const header = document.createElement("div");
  header.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  const h1 = document.createElement("h1");
  h1.innerText = data.title.rendered;
  header.append(h1);

  const date = document.createElement("p");
  date.classList.add("small", "mt-3", "text-end");
  if (data.date !== data.modified) {
    date.innerText = `Created: ${dateConverter(
      data.date
    )}. Updated: ${dateConverter(data.modified)}`;
  } else {
    date.innerText = `Created: ${dateConverter(data.date)}`;
  }
  const row = document.createElement("div");
  row.classList.add(
    "d-flex",
    "align-items-center",
    "justify-content-between",
    "my-3"
  );
  const author = document.createElement("div");
  author.classList.add("d-flex", "align-items-center", "me-3");
  const avatar = document.createElement("img");
  avatar.classList.add("rounded-circle", "me-2");
  avatar.src = data._embedded.author[0].avatar_urls["48"];
  const authorName = document.createElement("p");
  authorName.classList.add("mt-3");
  authorName.innerText = data._embedded.author[0].name;
  author.append(avatar, authorName);
  row.append(author, date);

  let edit = "";
  if (loggedIn()) {
    console.log(h1);
    edit = document.createElement("button");
    edit.classList.add("btn", "btn-secondary");
    const icon = document.createElement("i");
    icon.classList.add("bi", "bi-pencil-square");
    edit.append(icon);
    edit.setAttribute("type", "button");
    edit.setAttribute("title", "Edit post");
    edit.setAttribute("data-bs-target", "#updatePostModal");
    edit.setAttribute("data-bs-toggle", "modal");
    edit.setAttribute("data-bs-dismiss", "modal");
    header.append(edit);
  }

  const categories = document.createElement("div");
  categories.classList.add("my-3");
  const categoriesData = data._embedded["wp:term"][0];
  categoriesData.forEach((category) => {
    const categoryPill = document.createElement("span");
    categoryPill.innerText = category.name;
    categoryPill.classList.add("badge", "bg-secondary", "me-1");
    categories.append(categoryPill);
  });

  //better way than strings?
  let excerpt = "";
  if (data.excerpt.rendered !== data.content.rendered) {
    excerpt = document.createElement("div");
    excerpt.classList.add("small");
    excerpt.innerHTML = data.excerpt.rendered;
  }
  // should this be something else than a string? html element? but then it renders anyway?
  let img = "";
  if (data._embedded["wp:featuredmedia"]) {
    img = document.createElement("img");
    img.classList.add("img-fluid");
    img.src = data._embedded["wp:featuredmedia"][0].source_url;
    img.setAttribute("alt", data._embedded["wp:featuredmedia"][0].alt_text);
  }
  const content = document.createElement("div");
  content.classList.add("my-5");
  content.innerHTML = data.content.rendered;
  container.append(header, row, categories, excerpt, img, content);
  return container;
}

export function renderPostTemplate(data, parent) {
  document.title = data.title.rendered + " | Elementarium";
  parent.innerHTML = "";
  const post = postTemplate(data);
  parent.append(post);
}
