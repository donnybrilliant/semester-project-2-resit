// create a new bootstrap.Collapse object with #sidebar and set it to show
function showSidebar() {
  return new bootstrap.Collapse("#sidebar", {
    show: true,
  });
}

// checks if menu button has attribute aria-expanded="true" and change the button's text and color and set sidebar to flex-column
function checkButtonState() {
  const menuButton = document.querySelector("#menuButton");
  const visibility = menuButton.getAttribute("aria-expanded");
  const sidebar = document.querySelector("#sidebar");

  if (visibility === "true") {
    menuButton.innerHTML = `<i class="bi bi-x-lg"></i>`;
    menuButton.classList.remove("btn-primary");
    menuButton.classList.add("btn-secondary");
    sidebar.classList.add("d-flex", "flex-column");
  } else {
    menuButton.innerHTML = `<i class="bi bi-list"></i>`;
    menuButton.classList.remove("btn-secondary");
    menuButton.classList.add("btn-primary");
    sidebar.classList.remove("d-flex", "flex-column");
  }
}

// set event listener for transitionend event on #sidebar
function setMenuButtonListener() {
  const sidebar = document.querySelector("#sidebar");
  sidebar.addEventListener("transitionend", (event) => {
    checkButtonState();
  });
}

// show sidebar by default on medium and larger screens
function showSidebarOnMedium() {
  if (window.innerWidth >= 768) {
    showSidebar();
  }
}

// Show sidebar when resizing from small to medium and larger screens
/* function showSideBarOnResize() {
  // if mouseleave event is not triggered, the sidebar will not be shown

  window.addEventListener("resize", (event) => {
    if (window.innerWidth >= 768) {
      sidebar();
    }
  });
} */

// set up menu
export function setUpMenu() {
  showSidebarOnMedium();
  setMenuButtonListener();
  //showSideBarOnResize();
}
