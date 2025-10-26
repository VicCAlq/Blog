import { NavLink } from "react-router";

export function NavBar() {
  return(
    <nav>
      <NavLink to='/'>Default</NavLink>
      <NavLink to='/home'>Home</NavLink>
      <NavLink to='/articles'>Articles</NavLink>
      <NavLink to='/about'>About</NavLink>
    </nav>
  )
}
