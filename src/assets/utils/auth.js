import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = localStorage.getItem("loggedin");

  const response = redirect("/login?message=You must login first!");
  response.body = true;
  if (!isLoggedIn || isLoggedIn === "false") throw response;
  return null;
}
