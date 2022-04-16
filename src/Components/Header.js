import React,{useState} from 'react'

import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Search from './Search'
function Header() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
    <Nav>
      <Logo href="/">
        <img src="/Icons/logo.svg" height={64} width={94}/>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <MenuContainer  isOpen={isOpen}>
        <Menu>
            <Link to="/">Home</Link>
            <Link to="/product">Products</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">about</Link>
        </Menu>
        <Profile>
            <Carts>
                <img src="/Icons/bag.svg" width={32} height={20}/>
                <span>2</span>
            </Carts>
            <Avatar src="https://www.shareicon.net/data/512x512/2016/09/15/829472_man_512x512.png"/>
        </Profile>
      </MenuContainer>

    </Nav>
        <Search/>
    </Container>
  )
}

export default Header 
const Container = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
align-items:center;


`
const Nav = styled.div`
 padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

margin-bottom:3rem;

box-shadow: 0 2px 4px rgba(0,0,0,0.8);
`
const Logo = styled.a`
padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }

`
const Hamburger = styled.div`
display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`

const MenuContainer = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`
const Menu = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  a{
        padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #67bc98;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #7b7fda;
  }

    @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;

  }
  }
`
const Carts = styled.div`
display:flex;
align-items:center;

img{
width:34px;
transform: translate(40%,2px);


}
span{
    color: white;
    width: 20px;
    height: 20px;
    background:  #233067;
    border-radius: 10px;
    object-fit:contain;
    transform: translate(-50%,-15px);
    z-index: 100;
}


`
const Profile = styled.div`
display: flex;
justify-content: space-between;
align-items: center !important;

`
const Avatar = styled.img`
width:64px;
height: 34px;
object-fit:contain;
`