import React, { useEffect, useState } from 'react';
import './AppliedJobs.css';
import ReviewJobs from '../ReviewJobs/ReviewJobs';

const AppliedJobs = () => {
    const[data, setData] = useState([]);
    const[filter, setFilter] = useState(false);
    useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem("jobId"));
      setData(storedData);
    },[])
    useEffect(() => {
          const filtering = data.filter(item => item.remote === true)
          setFilter
    },[data])
    return (
        <div className='applied-container'>
            <div className='btn-filter-div'>
                <button>Remote-jobs</button>
                <button>Onsite-jobs</button>
            </div>
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