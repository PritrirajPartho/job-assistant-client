import React, { useEffect, useState } from 'react';
import './AppliedJobs.css';
import ReviewJobs from '../ReviewJobs/ReviewJobs';

const AppliedJobs = () => {
    const[data, setData] = useState([]);
    const[filter, setFilter] = useState([]);
    useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem("jobId"));
      setData(storedData);
      setFilter(storedData);
    },[])

    const handleFilter  = (fil) =>{
        if(fil === 'nofilter'){
            setFilter(data);
        }
        else{
            const filtered = data?.filter(job => job.remote === fil)
            setFilter(filtered)
        }
    }
    return (
        <div className='applied-container'>
            <div className='btn-filter-div'>
                <button onClick={() => handleFilter(true)}>Remote-jobs</button>
                <button onClick={() => handleFilter(false)}>Onsite-jobs</button>
                <button onClick={() => handleFilter('nofilter')}>No Filter</button>
            </div>
            {
                filter?.map(job => <ReviewJobs 
                   key={job.id}
                   job ={job}
                ></ReviewJobs>)
            }
        </div>
    );
};

export default AppliedJobs;