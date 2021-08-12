import React from "react"
import {useParams} from 'react-router-dom'

const About = props => {

    const {textosobre} = useParams()

    return (
        <div>
            <h1>Sobre</h1>
            <h3>Adicionar texto {textosobre}</h3>
        </div>
    )
}
export default About 