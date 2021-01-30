import React from 'react'
import { Context } from "../context/context"
export default function JobList() {
    const {state} = useContext(Context)
    const {jobs} = state;
    console.log(jobs);


    return (
        <div>
            
        </div>
    )
}
