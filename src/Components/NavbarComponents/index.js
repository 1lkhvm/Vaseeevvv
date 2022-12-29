import React from 'react'
import { NavLink } from 'react-router-dom'
import '../NavbarComponents/style.scss'
function NavbarComponents() {
    return (
        <>

            <div className='nav-container'>
                <div className='navbar-logo'>
                    <a href='#Home'>Start Bootstrap</a>
                </div>
                <div className='navbar-Menu'>
                    <ul>
                        <li>
                            <NavLink to={"/"} >Home</NavLink>
                        </li>
                        <li>
                            <NavLink  >About</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Contact"} >Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/About"} >Pricing</NavLink>
                        </li>
                        <li>
                            <NavLink >FAQ</NavLink>
                        </li>
                        <li>
                            <NavLink >Blog</NavLink>
                        </li>
                        <li >
                            <NavLink  >Portfolio</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='hamburger-icon'>
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>



        </>
    )
}

export default NavbarComponents