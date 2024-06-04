
import { NavBar } from "./NavBar"

import logo from '../images/elvis-logo.png'
import { Link } from "react-router-dom"

export const Header = () => {


    return (
        <header>
            <Link to='/'>
                <img className="logo" src={logo} />
            </Link>

            <NavBar />

        </ header>

    )
}
