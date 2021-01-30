import React from 'react'
import JobListContainer from "./container/job-list"
import FormContainer from "./container/form"
import FormSidebarContainer from "./container/form-sidebar"
import { Route, Switch } from 'react-router'
import JobDetails from './container/job-details'

export default function App() {
    return (
        <div>
            <h1>Github jobs</h1>
             <Switch>
             <Route exact path="/">
            	<FormContainer/>
            	<FormSidebarContainer/>
            	<JobListContainer/>
            </Route>
                <Route path="/job/:jobId">
                    <JobDetails/>
                </Route>
            </Switch>
        </div>
    )
}
