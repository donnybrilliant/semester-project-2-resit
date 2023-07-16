import { dateConverter } from "../utils/date.mjs";
import { renderResponseMessage } from "../utils/response.mjs";
import { createExcerptContainer } from "./sidebar/excerpt.mjs";

// Creates a sidebar item
function sidebarItemTemplate(data) {
  const container = document.createElement("a");
  container.classList.add(
    "list-group-item",
    "list-group-item-action",
    "py-3",
    "lh-sm"
  );

  container.href = "?id=" + data.id;
  container.innerHTML = `
  <div class="d-flex w-100 align-items-center justify-content-between">
      <strong class="mb-1"></strong>
      <code><small></small></code>
  </div>
  <div id="excerpt">
  </div>`;

  container.querySelector("strong").innerText = data.title.rendered;
  container.querySelector("small").innerText = dateConverter(data.date).slice(
    0,
    10
  );

  const excerptContainer = createExcerptContainer(data.excerpt.rendered);
  container.append(excerptContainer);

  return container;
}

// Renders the sidebar items
export function renderSidebarItems(dataList, parent) {
  parent.innerHTML = "";
  if (dataList.length === 0)
    renderResponseMessage("No posts found.", parent, "warning");
  dataList.forEach((element) => {
    const post = sidebarItemTemplate(element);
    parent.append(post);
  });
}
