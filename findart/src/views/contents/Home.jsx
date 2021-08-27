import React from "react"
import './Home.css'
import { Link } from 'react-router-dom'
import logo from "./../../imgs/logo.png"



const Home = props => (
    <div>
        <img className="Logo" src={logo} alt="logo"></img>
        <h3>Findart, divulgação e comércio no meio artístico.</h3>
        <h1>Categorias</h1>
        
        
        <nav>
        <ul className="Categorias">
                                <li>
                <Link to="/Pintura">Pintura</Link>
                </li>
                <li>
                    <Link to="/Escultura">Escultura</Link>
                </li>
                <li>
                    <Link to="/Musica">Música</Link>
                </li>
                <li>
                    <Link to="/Danca">Dança</Link>
                </li>
                <li>
                    <Link to="/Litera">Literatura</Link>
                </li>
                <li>
                    <Link to="/Cinema">Cinema</Link>
                </li>
            </ul>
            </nav>
            
        
    </div> 
    
)
export default Home