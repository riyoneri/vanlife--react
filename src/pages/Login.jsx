import { useState } from "react";

import Button from "../components/Button/Button";

export default () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="h-screen grid items-center">
      <form
        onSubmit={handleSubmit}
        className="grid gap-5 items-stretch max-w-xl w-full md:w-1/2 lg:w-1/3 px-5 mx-auto"
      >
        <p className="text-xl font-bold text-center">Sign in to your account</p>
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
        <Button color="orange">Sign In</Button>
      </form>
    </div>
  );
};
