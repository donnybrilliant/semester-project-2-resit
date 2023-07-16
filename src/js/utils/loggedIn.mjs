// Checks if user is logged in
export function loggedIn() {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  }
  return false;
}
