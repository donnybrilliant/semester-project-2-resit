import { loggedIn } from "../../utils/loggedIn.mjs";

export function editButton() {
  if (loggedIn()) {
    const edit = document.createElement("button");
    edit.id = "editButton";
    edit.classList.add("btn");
    edit.innerHTML = `<i class="bi bi-pencil-square fs-5"></i>`;
    edit.setAttribute("type", "button");
    edit.setAttribute("title", "Edit post");
    edit.setAttribute("data-bs-target", "#updatePostModal");
    edit.setAttribute("data-bs-toggle", "modal");
    edit.setAttribute("data-bs-dismiss", "modal");
    return edit;
  } else {
    return "";
  }
}
