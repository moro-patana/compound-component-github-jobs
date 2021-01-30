import React from 'react'
import JobListContainer from "./container/job-list"
import FormContainer from "./container/form"
import FormSidebarContainer from "./container/form-sidebar"

export default function App() {
    return (
        <div>
            <h1>Github jobs</h1>
            <FormContainer/>
            <FormSidebarContainer/>
            <JobListContainer />
        </div>
    )
}
