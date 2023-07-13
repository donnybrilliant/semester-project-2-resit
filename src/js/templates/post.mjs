import { dateConverter } from "../utils/date.mjs";
import { loggedIn } from "../utils/loggedIn.mjs";

export function postTemplate(data) {
  const container = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.innerText = data.title.rendered;
  const avatar = document.createElement("img");
  avatar.src = data._embedded.author[0].avatar_urls["48"];
  const author = document.createElement("p");
  author.innerText = data._embedded.author[0].name;

  let edit = "";
  if (loggedIn()) {
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
  }

  const date = document.createElement("p");
  if (data.date !== data.modified) {
    date.innerText = `Created: ${dateConverter(
      data.date
    )}. Updated: ${dateConverter(data.modified)}`;
  } else {
    date.innerText = `Created: ${dateConverter(data.date)}`;
  }
  const categories = document.createElement("div");
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
  content.innerHTML = data.content.rendered;
  container.append(
    h1,
    avatar,
    author,
    edit,
    date,
    categories,
    excerpt,
    img,
    content
  );
  return container;
}

export function renderPostTemplate(data, parent) {
  parent.innerHTML = "";
  const post = postTemplate(data);
  parent.append(post);
}
