import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "./CartWidget"
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'


export const NavBar = () => {
    let [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const catagoriaRef = collection(db, 'categorias');
        getDocs(catagoriaRef)
            .then((res) => {
                setCategorias(res.docs.map((doc) => {
                    return { ...doc.data() }
                }))
            })
    }, [])



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
