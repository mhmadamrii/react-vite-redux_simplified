import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const storeState = useSelector((state) => state);
  const { user } = storeState;
  console.log("navbar", storeState);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h1>
            Welcome <span style={{ color: "blue" }}> {user.username}</span>
          </h1>
        </div>
        <div>
          <Link to="/">Increment & decrement</Link> <br />
          <Link to="/todo">Fucking todo app</Link> <br />
          <Link to="/playground">Playground</Link>
        </div>
      </div>
    </>
  );
}
