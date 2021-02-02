import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { Context } from "../context/context"
import { JobList } from '../components'

export default function JobListContainer() {
    const {state} = useContext(Context)
    const {jobs} = state;
    return (
        <JobList>
            {jobs.map(job => (
                <Link to={`/job/${job.id}`} key={job.id}>
                <JobList.Frame>
                  <JobList.Image src={job.company_logo} alt="logo"/>
                  <div>
                      <JobList.Title>{job.company}</JobList.Title>
                      <JobList.SubTitle>{job.title}</JobList.SubTitle>
                      <JobList.Button>{job.type}</JobList.Button>
                      <JobList.History>
                          <JobList.Span>{job.location}</JobList.Span>
                          <JobList.Span>{new Date(job.created_at).toDateString()}</JobList.Span>
                      </JobList.History>
                  </div>
                </JobList.Frame>
                </Link>
            ))}
        </JobList>
    )
}
