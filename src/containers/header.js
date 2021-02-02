import React, { useContext, useState } from 'react'
import { Context } from "../context/context"
import { Header } from "../components"

export default function HeaderContainer() {
    const {state, dispatch} = useContext(Context)
    const {jobs} = state
    const [searchForJob, setSearchForJob] = useState("")

    
    function searchForJobInput(e) {
        e.preventDefault()
        const filteredJobByName = jobs.filter(job => job.title.toLowerCase().includes(searchForJob))
        dispatch({type: "SEARCH_JOB_BY_NAME", value: filteredJobByName})
        setSearchForJob("")
    }
    
    return (
        <Header>
            <Header.Form  onSubmit={searchForJobInput}>
                <Header.Input
                type="text"
                placeholder="Type the title of the job"
                value={searchForJob}
                onChange={(e) => setSearchForJob(e.target.value)}
                />
                <Header.SubmitButton>Search</Header.SubmitButton>
            </Header.Form>
        </Header>
    )
}