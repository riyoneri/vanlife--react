import Button from "../components/Button/Button";

export default () => {
  return (
    <div className="h-screen grid items-center">
      <div className="grid gap-5 items-stretch w-1/3 px-5 mx-auto">
        <p className="text-xl font-bold text-center">Sign in to your account</p>
        <div className="grid gap-4">
          <input
            type="text"
            placeholder="Email Address"
            className="py-1 px-2 rounded-sm focus:outline-0"
          />
          <input
            type="text"
            placeholder="Password"
            className="py-1 px-2 rounded-sm focus:outline-0"
          />
        </div>
        <Button color="orange">Sign In</Button>
      </div>
    </div>
  );
};
