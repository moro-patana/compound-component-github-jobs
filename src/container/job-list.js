import React, {useContext} from 'react'
import { Context } from "../context/context"
export default function JobList() {
    const {state} = useContext(Context)
    const {jobs, loading} = state;
    console.log(jobs);


    return (
        <>
        {loading && <p>Loading</p>}
        {!loading && (
            <div>
        {jobs.map(job => (
            <div className="job_card" key={job.id}>
             <img src={job.company_logo} alt="Company logo"/>
             <div className="job">
             <h3>{job.company}</h3>
             <p>{job.title}</p>
             <button>{job.type}</button>
             </div>
            </div>
    
         ))}
         </div>
        )}
        </>
    )
}
