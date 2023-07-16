import { searchHandler } from "../handlers/search.mjs";

// Sets up the search form listener
export function setSearchListener(posts, container) {
  const form = document.querySelector("#searchForm");
  form.addEventListener("input", (event) => {
    searchHandler(posts, container, event);
  });
}
