import { Link } from "react-router-dom";
import SetTheme from "../hooks/SetTheme";
import Button from "../components/Button";

export default function Navbar() {
  return(
    <nav className="flex justify-between py-3 px-4 place-items-center">
      <Link to="/"><Button name="HOME"></Button></Link>
      <SetTheme />
    </nav>
  )
}