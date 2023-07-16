import { URL } from "../constants.mjs";

// API Call: Logs in a user and returns the token
export async function login(user) {
  const loginURL = URL + "/jwt-auth/v1/token";
  const method = "post";
  const body = JSON.stringify(user);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();

  if (response.ok) {
    return result;
  }

  if (!response.ok) {
    const error = result.message ? result.message : "Log in error. Try again.";
    throw new Error(error);
  }
}
