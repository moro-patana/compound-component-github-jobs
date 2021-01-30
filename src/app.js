import React from 'react'
import JobListContainer from "./container/job-list"
import FormContainer from "./container/form"

export default function App() {
    return (
        <div>
            <h1>Github jobs</h1>
            <FormContainer/>
            <JobListContainer />
        </div>
    )
}
