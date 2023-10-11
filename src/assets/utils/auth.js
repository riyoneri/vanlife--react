import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = false;
  const response = redirect("/login?message=You must login first!");
  response.body = true;
  if (!isLoggedIn) throw response;
}
