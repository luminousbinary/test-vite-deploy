import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      [FIXED_CONTENT]

      <nav>
        <Link to="/vrr/">Home</Link>
        {" | "}
        <Link to="/vrr/contact">Contact</Link>
      </nav>

      <Outlet />

      [FIXED_CONTENT]
    </>
  );
}