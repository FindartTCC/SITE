import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./../../imgs/logo.png"
import letras from "./../../imgs/letras.png"
const Menu = props => (

    <aside className="Menu">
        <nav>
        

            <ul>
                <li>
                <img src={letras} alt="logo"></img></li>
            
                <li>
                <Link to="/">Inicial</Link>
                </li>
                <li>
                    <Link to="/About">Sobre</Link>
                </li>
                <li>
                    <Link to="/Descobrir">Descobrir</Link>
                </li>
                <li>
                    <Link to="/Perfil">Perfil</Link>
                </li>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
                <li>
                    <Link to="/Cadastro">Cadastre-se</Link>
                </li>
            </ul>
        </nav>
    </aside>
)
export default Menu