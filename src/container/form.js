import React, { useContext, useState } from 'react'
import { Context } from "../context/context"
import { Form } from "../components"
import { FormSubmit } from '../components/form/styles/form'
export default function FormContainer() {
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
        <Form>
            <FormSubmit  onSubmit={searchForJobInput}>
                <Form.Input
                type="text"
                placeholder="Type the title of the job"
                value={searchForJob}
                onChange={(e) => setSearchForJob(e.target.value)}
                />
                <Form.ButtonSubmit>Search</Form.ButtonSubmit>
            </FormSubmit>
        </Form>
    )
}
