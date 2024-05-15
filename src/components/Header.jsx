
import { NavBar } from "./NavBar"

import logo from '../images/elvis-logo.png'

export const Header = () => {
    return (
        <header>

            <img className="logo" src={logo} />

            <NavBar />
            
        </ header>

    )
}
