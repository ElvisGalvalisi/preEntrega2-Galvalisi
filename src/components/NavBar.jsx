import React from "react";
import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "./CartWidget"
import categorias from "../data/categorias.json";



export const NavBar = () => {
    return (
        <>

            <nav className="nav-bar">
                <ul className="menu-nav">
                    <li className="lista-nav">
                        <NavLink to="/" activeclassname="active" className="navLink" >INICIO</NavLink>
                    </li>
                    {
                        categorias.map((cat) => {
                            return (
                                <li className="lista-nav" key={cat.id}>
                                    <NavLink to={`/deporte/${cat.id}`} activeclassname="active" className="navLink" >{cat.nombre}</NavLink>
                                </li>
                            )

                        })
                    }
                </ul>
            </nav>
            <CartWidget />
        </>


    )
}
