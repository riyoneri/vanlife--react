import { useState } from "react";
import { useLoaderData, useNavigate, Form } from "react-router-dom";

import { loginUser } from "../assets/utils/api";

import Button from "../components/Button/Button";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);
  } catch (err) {
    console.log(err);
    return null;
  }

  return null;
}

export default () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const message = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="h-screen grid items-center">
      <Form
        method="post"
        className="grid gap-5 items-stretch max-w-xl w-full md:w-1/2 lg:w-1/3 px-5 mx-auto"
      >
        <p className="text-xl font-bold text-center">Sign in to your account</p>
        {message && <p className="text-center text-red-600">{message}</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
        <div className="grid gap-4">
          <input
            type="text"
            placeholder="Email Address"
            className="py-1 px-2 border-2 rounded-sm focus:outline-0"
            name="email"
          />
          <input
            type="text"
            placeholder="Password"
            className="py-1 px-2 border-2 rounded-sm focus:outline-0"
            name="password"
          />
        </div>
        <Button color="orange" disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "Log in"}
        </Button>
      </Form>
    </div>
  );
};
