import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'
import Home from '../../views/contents/Home'
import About from '../../views/contents/About'
import NaoEncontrado from '../../views/contents/NaoEncontrado'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/About/:textosobre">
                <About />
            </Route>
            <Route path="*">
                <NaoEncontrado />
            </Route>
        </Switch>
    </main>
)
export default Content

