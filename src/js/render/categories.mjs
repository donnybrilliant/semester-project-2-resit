import { read } from "../api/categories/read.mjs";

// Renders all categories in the select elements
export async function renderCategories() {
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
