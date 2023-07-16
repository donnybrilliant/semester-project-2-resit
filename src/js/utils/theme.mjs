// Creates a theme toggle button
export function theme() {
  const toggleButton = document.querySelector("#toggleTheme");

  if (!toggleButton) return;

  const getStoredTheme = () => localStorage.getItem("theme");
  const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

  document.documentElement.setAttribute("data-bs-theme", getStoredTheme());

  if (getStoredTheme() === "dark") {
    toggleButton.setAttribute("checked", true);
  } else {
    toggleButton.removeAttribute("checked");
  }

  toggleButton.addEventListener("change", (event) => {
    event.preventDefault();
    toggleButton.classList.toggle("checked");
    const theme = event.target.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-bs-theme", theme);
    setStoredTheme(theme);
  });
}
