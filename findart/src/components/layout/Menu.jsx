import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'
const Menu = props => (

    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Página Inicial</Link>
                </li>
                <li>
                    <Link to="/About/teste">Sobre</Link>
                </li>
            </ul>
        </nav>
    </aside>
)
export default Menu