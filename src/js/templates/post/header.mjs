import { editButton } from "./editButton.mjs";

export function createHeader(title) {
  const header = document.createElement("div");
  header.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  const h1 = document.createElement("h1");
  h1.innerText = title;

  const edit = editButton();

  header.append(h1);
  header.append(edit);

  return header;
}
