import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = true;
  const response = redirect("/login?message=You must login first!");
  response.body = true;
  if (!isLoggedIn) throw response;
  return null
}
