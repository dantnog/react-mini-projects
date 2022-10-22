import { Link } from "react-router-dom";
import Button from "../components/Button";
import ChangeTheme from "../hooks/Theme";


export default function Navbar(){
  const linksTo = [
    {to: '/', name: 'HOME'},
    //{to: '/todo', name: 'TODO'},
  ]

  return(
    <header className="flex justify-between py-3 px-4 place-items-center">
      <h2 className="text-2xl text-green-500 tracking-widest font-semibold">
        HALL
      </h2>

      <nav className="space-x-4 flex place-items-center">
        { linksTo.map((link, ind) => (
          <Link key={ind} to={link.to} >
            <Button name={link.name}/>
          </Link>
        ))}
      
        <ChangeTheme />
      </nav>
    </header>
  )
}