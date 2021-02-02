import React, { useContext } from "react"
import { Context } from "../context/context"
import { Link, useParams } from "react-router-dom"
import { JobDetails } from "../components"

function JobDetailsContainer() {
    const { state, dispatch } = useContext(Context)
    const { jobs } = state
    const { jobId } = useParams()
    const job = jobs.find(job => job.id === jobId)

    return (
        <JobDetails>
            <div>
                <Link className="back-to-search" to="/">⬅Back to search</Link>
                <JobDetails.Heading>How to apply</JobDetails.Heading>
                <div className="address" dangerouslySetInnerHTML={{
                    __html: job?.how_to_apply
                }}></div>
            </div>
            <article key={job?.id} className="jobs-details">
                <JobDetails.TitleFrame>
                    <JobDetails.Title>{job?.title}</JobDetails.Title>
                    <JobDetails.Button>{job?.type}</JobDetails.Button>
                </JobDetails.TitleFrame>
                <br></br>
                <JobDetails.Span>{new Date(job?.created_at).toLocaleDateString()}</JobDetails.Span>
                <JobDetails.LogoFrame>
                    <JobDetails.Image src={job?.company_logo} alt={job?.company} />
                    <div className="company-info">
                        <JobDetails.SubTitle>{job?.company}</JobDetails.SubTitle>
                        <JobDetails.Span>
                            <i className="ri-earth-line"></i>
                            {job?.location}
                        </JobDetails.Span>
                    </div>
                </JobDetails.LogoFrame>
                <div className="description" dangerouslySetInnerHTML={{
                    __html: job?.description
                }}></div>
            </article>
        </JobDetails>

    )
}
export default JobDetailsContainer;