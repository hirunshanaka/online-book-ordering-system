import React from 'react'
import MenuLink from '../../MenuLink/MenuLink'
import './HeaderContent.css'
function HeaderContent() {
  return (
    <>
    <div className='nev'>
        <div>
        <MenuLink linkname="Home" url="/"/>
        <MenuLink linkname="About Us" url="AboutUs"/>
        <MenuLink linkname="Contact" url="Contact"/>
        <MenuLink linkname="Login" url="Login"/>
        <MenuLink linkname="Register" url="Register"/>
        <MenuLink linkname="Cart" url="Cart"/>

        </div>
       <div className='h3'>
       <h3>Buy Bookz online shop</h3>
       </div>
    </div>
    
    </>
  )
}

export default HeaderContent