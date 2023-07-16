export function createCategoriesSection(categoriesData) {
  const categoriesSection = document.createElement("div");
  categoriesSection.classList.add("my-5");

  categoriesData.forEach((category) => {
    const categoryPill = document.createElement("span");
    categoryPill.innerText = category.name;
    categoryPill.classList.add("badge", "bg-primary", "p-2", "me-1");
    categoriesSection.append(categoryPill);
  });

  return categoriesSection;
}
