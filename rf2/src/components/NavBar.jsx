import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <ul>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/about" >About</Link>
        </li>
        <li>
          <Link to="/counter" >Counter</Link>
        </li>
        <li>
          <Link to="/addstudent" >Add Student</Link>
        </li>
      </ul>
    </>
  );
}

export default NavBar;