import { read } from "../api/categories/read.mjs";

export async function renderCategories() {
  // This renders the categories in the sidebar and modals
  const categoriesContainers = document.querySelectorAll(".categories");
  if (categoriesContainers.length > 0) {
    const categories = await read();
    categoriesContainers.forEach((container) => {
      categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.id;
        option.textContent = category.name;
        container.appendChild(option);
      });
    });
  }
}
