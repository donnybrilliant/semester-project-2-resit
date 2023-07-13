export function loggedIn() {
  const token = localStorage.getItem("token");
  // API validation?
  if (token) {
    return true;
  }
  return false;
}
