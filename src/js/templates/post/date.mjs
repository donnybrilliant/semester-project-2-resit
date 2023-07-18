import { dateConverter } from "../../utils/date.mjs";

export function createDateSection(createdDate, modifiedDate) {
  const dateSection = document.createElement("p");
  dateSection.classList.add("small", "mt-3", "text-end", "col-6", "col-md-10");

  if (createdDate !== modifiedDate) {
    dateSection.innerText = `Created: ${dateConverter(
      createdDate
    )}. Updated: ${dateConverter(modifiedDate)}`;
  } else {
    dateSection.innerText = `Created: ${dateConverter(createdDate)}`;
  }

  return dateSection;
}
