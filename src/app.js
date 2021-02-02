import React from 'react'
import HeaderContainer from "./containers/header"
import SideBarContainer from "./containers/sidebar"
import JobListContainer from './containers/job-list'
import { Route, Switch } from 'react-router'
import JobDetailsContainer from "./containers/job-details"

export default function App() {
    return (
        <div>
            <h1>Github <span>Jobs</span></h1>
            <Switch>
             <Route exact path="/">
            	<HeaderContainer/>
                <div className="container">
                    <SideBarContainer/>
                    <JobListContainer/>
                 </div>
            </Route>
                <Route path="/job/:jobId">
                    <JobDetailsContainer/>
                </Route>
            </Switch>
        </div>
    )
}
