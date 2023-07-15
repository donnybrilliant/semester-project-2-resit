function sidebar() {
  return new bootstrap.Collapse("#sidebar", {
    show: true,
  });
}

function checkButtonState() {
  const menuButton = document.querySelector("#menuButton");
  const visibility = menuButton.getAttribute("aria-expanded");

  if (visibility === "true") {
    menuButton.innerHTML = `<i class="bi bi-x-lg"></i>`;
    document.querySelector("#sidebar").classList.add("d-flex", "flex-column");
  } else {
    menuButton.innerHTML = `<i class="bi bi-list"></i>`;
    document
      .querySelector("#sidebar")
      .classList.remove("d-flex", "flex-column");
  }
}

function setMenuButtonListener() {
  document
    .querySelector("#sidebar")
    .addEventListener("transitionend", (event) => {
      checkButtonState();
    });
}

function showSidebarOnMedium() {
  if (window.innerWidth >= 768) {
    sidebar();
  }
}
function showSideBarOnResize() {
  // if mouseleave event is not triggered, the sidebar will not be shown

  window.addEventListener("resize", (event) => {
    if (window.innerWidth >= 768) {
      sidebar();
    }
  });
}

export function setUpMenu() {
  showSidebarOnMedium();
  showSideBarOnResize();
  setMenuButtonListener();
}
