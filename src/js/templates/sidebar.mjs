import { dateConverter } from "../utils/date.mjs";
import { renderResponseMessage } from "../utils/response.mjs";

export function sidebarItemTemplate(data) {
  const container = document.createElement("a");
  container.classList.add(
    "list-group-item",
    "list-group-item-action",
    "py-3",
    "lh-sm"
  );
  container.innerHTML = `
  <div class="d-flex w-100 align-items-center justify-content-between">
      <strong class="mb-1"></strong>
      <code><small></small></code>
  </div>
  <div id="excerpt">
  </div>`;

  container.href = "?id=" + data.id;
  container.querySelector("strong").innerText = data.title.rendered;
  container.querySelector("small").innerText = dateConverter(data.date).slice(
    0,
    10
  );

  // try .text-truncate through bootstrap instead?
  // check if excerpt is longer than 120 characters
  if (data.excerpt.rendered.length > 120) {
    // This one is not good practice.
    container.querySelector("#excerpt").innerHTML =
      data.excerpt.rendered.slice(0, 120) + "...";
  } else {
    container.querySelector("#excerpt").innerHTML = data.excerpt.rendered;
  }

  if (container.querySelector("p")) {
    container.querySelector("p").classList.add("col-10", "mb-1", "small");
  }
  return container;
}

export function renderSidebarItems(dataList, parent) {
  parent.innerHTML = "";
  if (dataList.length === 0)
    renderResponseMessage("No posts found.", parent, "warning");
  dataList.forEach((element) => {
    const post = sidebarItemTemplate(element);
    parent.append(post);
  });
}
