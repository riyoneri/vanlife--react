import { Link } from "react-router-dom";

export default function HostHeader() {
  return (
    <nav className="flex gap-10">
      <Link to="/host">Host</Link>
      <Link to="/host/income">Income</Link>
      <Link to="/host/reviews">Reviews</Link>
    </nav>
  );
}
