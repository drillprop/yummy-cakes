import { motion } from "framer-motion"
import { Link } from "gatsby"
import React from "react"
import useChangeCursor from "../../hooks/useChangeCursor"
import { Wrapper } from "../../styles/global.styles"
import Arrow from "./Arrow"
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
      <Wrapper>
        <NavList>
          {navPaths.map(({ id, path, title }) => (
            <motion.li
              initial={{ x: -80 }}
              whileHover={{
                x: 0,
                transition: {
                  duration: 0.4,
                  ease: [0.5, 0.04, -0.01, 0.8],
                },
              }}
              key={id}
            >
              <Arrow />
              <Link to={path} {...changeCursorHandlers}>
                {title}
              </Link>
            </motion.li>
          ))}
        </NavList>
      </Wrapper>
    </Nav>
  )
}

export default Navigation
