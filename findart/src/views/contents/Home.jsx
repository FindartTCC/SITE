import React from "react"
import './Home.css'
import { Link } from 'react-router-dom'
import logo from "./../../imgs/logo.png"



const Home = props => (
    <div>
        <h1>Categorias</h1>
        
        
        <nav>
        <ul>
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
            
        <h3>Findart, divulgação e comércio no meio artístico.</h3>
    </div> 
    
)
export default Home