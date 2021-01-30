import React, {useContext} from 'react'
import { Context } from "../context/context"
import { JobList } from "../components"
export default function JobListContainer() {
    const {state} = useContext(Context)
    const {jobs, loading} = state;
    console.log(jobs);


    return (
        <>
        {loading && <p>Loading</p>}
        {!loading && (
            <div>
        {jobs.map(job => (
            <JobList key={job.id}>
                <JobList.Image src={job.company_logo} alt="Company logo"/>
             <div className="job">
             <JobList.Title>{job.company}</JobList.Title>
             <JobList.SubTitle>{job.title}</JobList.SubTitle>
             <JobList.Button>{job.type}</JobList.Button>
             <JobList.History>
                 <span>{job.location}</span>
                 <span>{new Date(job.created_at).toDateString()}</span>
             </JobList.History>
             </div>
            </JobList>
    
         ))}
         </div>
        )}
        </>
    )
}
