import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import { loginUser } from "../assets/utils/api";

import Button from "../components/Button/Button";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export default () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const message = useLoaderData();

  function handleChange(event) {
    setError(null);
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);
    loginUser(formData)
      .then((user) => console.log(user))
      .catch((err) => setError(err.message))
      .finally(() => setStatus("idle"));
  }

  return (
    <div className="h-screen grid items-center">
      <form
        onSubmit={handleSubmit}
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
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="text"
            placeholder="Password"
            className="py-1 px-2 border-2 rounded-sm focus:outline-0"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <Button color="orange" disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "Log in"}
        </Button>
      </form>
    </div>
  );
};
