export function responseMessage(data, color) {
  const container = document.createElement("div");
  container.classList.add("mt-3", "alert", "alert-" + color);
  container.innerText = data;
  return container;
}

export function renderResponseMessage(data, parent, color) {
  const response = responseMessage(data, color);
  parent.innerHTML = "";
  parent.append(response);
}
