import { NavLink } from "react-router";

export function NavBar() {
  return(
    <nav>
      {/* <NavLink to='/'>Default</NavLink> */}
      <NavLink to='/Blog/home'>Home</NavLink>
      <NavLink to='/Blog/articles'>Artigos</NavLink>
      <NavLink to='/Blog/about'>Sobre</NavLink>
    </nav>
  )
}
