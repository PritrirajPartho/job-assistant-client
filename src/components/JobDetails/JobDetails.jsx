import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const[job, setJob] = useState({});
    const jobs = useLoaderData();
    const clickId = useParams();
    useEffect(() =>{
        fetch('../../../public/data.json')
        .then(res => res.json())
        .then(data => data.find((j)=> j.id === clickId.jobId ))
        console.log(j)
    },[])
    // useEffect(() =>{
    //   fetch('../../../public/data.json')
    //   .then(res => res.json())
    //   .then(data =>{
    //       data.find(j => j.id === clickId.jobId)
    //       setJob(j)
    // }, [])
    // jobs.find(j=>{
    //     j.id === clickId.jobId;
    //     return setJob(j);
    // })
    return (
        <div>
            <h1>It is Job Details</h1>
            <h1>name:{job.name}</h1>
            <h3>salary:{job.salary}</h3>
        </div>
    );
};

export default JobDetails;