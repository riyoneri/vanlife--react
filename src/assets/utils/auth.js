import { redirect } from "react-router-dom";

export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname;
  const isLoggedIn = localStorage.getItem("loggedin");

  const response = redirect(
    `/login?message=You must login first!&redirectTo=${pathname}`,
  );
  response.body = true;
  if (!isLoggedIn || isLoggedIn === "false") throw response;
  return null;
}
