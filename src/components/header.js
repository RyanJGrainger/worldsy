import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import { menuData } from "../data/MenuData"

const Header = () => {
  return(
    <Nav> 
      <NavLink to="/">Worldsy</NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((item, index) =>(
          <NavLink to={item.link} key={index}>
          {item.title}
          </NavLink>
        ))}
      </NavMenu>
    </Nav>
  )
}



export default Header


const Nav = styled.nav`
  background: black;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  posistion: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px){
    display: block;
    posistion: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }

`