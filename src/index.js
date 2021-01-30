import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import ContextProvider from "./context/context"
import App from "./app"
import { GlobalStyles } from "./global-styles"


ReactDOM.render(
    <ContextProvider>
         <Router>
             <GlobalStyles/>
            <App/>
        </Router>
    </ContextProvider>, document.getElementById('root'))