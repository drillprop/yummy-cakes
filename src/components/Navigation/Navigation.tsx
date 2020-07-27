import { Link } from "gatsby"
import React from "react"
import useChangeCursor from "../../hooks/useChangeCursor"
import { Nav, NavList } from "./navigation.styles"

type NavPath = { path: string; id: number; title: string }

const navPaths: NavPath[] = [
  {
    id: 0,
    path: "/",
    title: "Home",
  },
  {
    id: 1,
    path: "/about",
    title: "About Us",
  },
  {
    id: 2,
    path: "/order",
    title: "Order a Cake",
  },
  {
    id: 3,
    path: "/contact",
    title: "Contact",
  },
]

const Navigation = () => {
  const changeCursorHandlers = useChangeCursor()
  return (
    <Nav>
      <NavList>
        {navPaths.map(({ id, path, title }) => (
          <li key={id} {...changeCursorHandlers}>
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </NavList>
    </Nav>
  )
}

export default Navigation
