import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import App from "./app"


ReactDOM.render(
    // <ContextProvider>
        // <Router>
            <App/>, document.getElementById('root'))
        // </Router>
    // </ContextProvider>, document.getElementById('root'))