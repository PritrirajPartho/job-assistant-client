import React, { useEffect, useState } from 'react';
import './AppliedJobs.css';
import ReviewJobs from '../ReviewJobs/ReviewJobs';

const AppliedJobs = () => {
    const[data, setData] = useState([]);
    useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem("jobId"));
      setData(storedData);
    },[])
    console.log(data);
    return (
        <div className='applied-container'>
            {
                data.map(job => <ReviewJobs 
                   key={job.id}
                   job ={job}
                ></ReviewJobs>)
            }
        </div>
    );
};

export default AppliedJobs;