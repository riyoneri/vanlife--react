import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

export default function NotFound() {
  return (
    <div className="px-5 h-screen grid place-items-center">
      <div className="space-y-5">
        <p className="text-lg sm:text-2xl font-bold">
          Sorry, the page you were looking for was not found.
        </p>
        <Link to="/" className="block text-center">
          <Button color="dark" style="w-full sm:w-auto sm:px-32">
            Return to home
          </Button>
        </Link>
      </div>
    </div>
  );
}
