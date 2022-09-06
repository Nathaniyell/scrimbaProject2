import React from 'react'
import styled from 'styled-components'



const Nav = styled.nav`
background: #f55a5a;
width: 100%;
color: #fff;
padding: 20px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;

.logo{
  border-radius: 50%;
  background: #fff;
  width: 40px;
  height: 40px;
}
`
 


const NavBar = () => {
  return (
    <Nav>
      <div className='logo'></div>&nbsp;&nbsp;
        <p>my travel journal.</p>
    </Nav>
  )
}

export default NavBar